import { Injectable, NgZone } from '@angular/core';
import { 
  EncounterMap,
  PlayerMap,
  MonsterMap,
  Combat, Player, SpawnGroup, 
  Monster, Encounter,
  CombatGroup,
  Combatant } from './types';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import * as uuid from 'uuid';

const combatInitialState: Combat = {
  encounter: null,
  groups: { },
  initiative: 0
}

const statBonus = [ 0, -5, -4, -4, -3, -3, -2, -2, 
  -1, -1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10 ];

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public party: PlayerMap = { }
  public monsters: MonsterMap = { }
  public encounters: EncounterMap = { }
  public combat: Combat = { ...combatInitialState }

  public user: any = null;
  public users: any = null;

  public uploadTask: AngularFireUploadTask = null;
  public uploadPercentage: number = 0;
  public uploadPercent: Observable<number>;

  monsterEvents: Observable<any>;
  partyEvents: Observable<any>;
  encounterEvents: Observable<any>;
  combatEvents: Observable<any>;
  roleEvents: Observable<any>;

  constructor(private http: HttpClient,
              private sanitizer: DomSanitizer,
              private router: Router,
              public db: AngularFireDatabase,
              public auth: AngularFireAuth, 
              private zone: NgZone,
              private storage: AngularFireStorage) {
    this.auth.onAuthStateChanged(
      (user) => {
        this.zone.run(
          () => {
            this.user = user;
            this.subscribeToEvents();
          }
        )
      }
    )
  }

  updateUser(role: string) {
    const itemRef = this.db.object(`users/${this.user.uid}`);
    itemRef.update({ email: this.user.email, displayName: this.user.displayName, role: role });
  }

  subscribeToEvents() {
    this.combatEvents = this.db.object('combat').valueChanges();
    this.combatEvents.subscribe(
      (change: Combat) => {
        if (!change) {
          this.combat = { ...combatInitialState };
        } else {
          if (this.combat.initiative != change.initiative) {
            this.combat.initiative = change.initiative;
          }
          for (const [groupUID, group] of Object.entries(change.groups)) {
            if (!(groupUID in this.combat.groups)) {
              this.combat.groups = { ...this.combat.groups, [groupUID]: group};
            } else {
              if (JSON.stringify(this.combat.groups[groupUID]) !== JSON.stringify(group)) {
                this.combat.groups = {...this.combat.groups, [groupUID]: group};
              }
            }
          }
          if (JSON.stringify(this.combat.encounter) != JSON.stringify(change.encounter)) {
            this.combat.encounter = change.encounter;
          }
          for (const [groupUID, group] of Object.entries(this.combat.groups)) {
            if (!(groupUID in change.groups)) {
              delete this.combat.groups[groupUID];
              this.combat.groups = { ...this.combat.groups };
            }
          }
        }
      }
    );
    this.monsterEvents = this.db.object('monsters').valueChanges();
    this.monsterEvents.subscribe(
      (change: MonsterMap) => {
        if (!change) {
          this.monsters = { }
        } else {
          this.monsters = change;
        }
      }
    )
    this.partyEvents = this.db.object('party').valueChanges();
    this.partyEvents.subscribe(
      (change) => {
        if (!change) {
          this.party = { }
        } else {
          this.party = change;
        }
      }
    )
    this.encounterEvents = this.db.object('encounters').valueChanges();
    this.encounterEvents.subscribe(
      (change) => {
        if (!change) {
          this.encounters = { };
        } else {
          this.encounters = change;
        }
      }
    )
    this.roleEvents = this.db.object('users').valueChanges();
    this.roleEvents.subscribe(
      (users) => {
        if (!users) return;
        this.users = users;
        if (this.users[this.user.uid] === 'dm' ||
            this.users[this.user.uid] === 'player') {
          this.updateUser(this.users[this.user.uid]);
        }
      }
    )
  }

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.auth.signOut();
  }


  replacePlayer(uid: string, player: Player) {
    this.party[uid] = { ...player };
    const itemRef = this.db.object(`party/${uid}`);
    itemRef.set(player);
  }

  runEncounter(uid: string) {
    this.combat.encounter = { ...(this.encounters[uid])}
    this.combat.groups = { };
    this.combat.initiative = 0;
    this.router.navigateByUrl('/tabs/combat');
  }

  syncPlayer(uid: string, url: string) {
    let player: Player = null;
    if (!this.party[uid]) {
      player = {
        url
      }
    } else {
      player = { ...this.party[uid] };
    }
    this.http.get("https://cors-anywhere.herokuapp.com/" + player.url).toPromise().then(
      (response: any) => {
        let data = response.data;
        if (data.overrideHitPoints) {
          player.maxHP = data.overrideHitPoints
        } else {
          player.maxHP = data.baseHitPoints + data.bonusHitPoints;
        }
        player.currentHP = player.maxHP - data.removedHitPoints;
        player.name = data.name;
        let dex = 0;
        if (data.overrideStats[1].value) {
          dex = data.overrideStates[1].value;
        } else {
          dex = data.stats[1].value;
          dex += data.bonusStats[1].value;
          Object.keys(data.modifiers).forEach(
            (category) => {
              data.modifiers[category].forEach(
                modifier => {
                  if (modifier.subType === 'dexterity-score') {
                    dex += modifier.value
                  }
                }
              )
            }
          )
        }
        let ac = 0;
        let equipped = data.inventory.filter(item => item.equipped);
        equipped.forEach(
          equipped => {
            if (equipped.definition.armorClass) {
              ac += equipped.definition.armorClass;
            }
          }
        )
        ac += statBonus[dex];
        player.ac = ac;
        player.portrait = data.avatarUrl;
        this.replacePlayer(uid, player);
      }
    )
  }

  getPortrait(portrait: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(portrait);
  }

  insertCombatGroup(group: CombatGroup) {
    this.combat.groups = {
      ...this.combat.groups,
      [ uuid.v4().substring(0, 8) ]: group
    };
    this.saveCombat();
  }

  deployPlayer(uid: string, initiative: number) {
    let group: CombatGroup = {
      combatants: {
        [uid]: {...this.party[uid]},
      },
      initiative,
      type: "party",
      portrait: this.party[uid].portrait,
      uid
    }
    this.insertCombatGroup(group);
  }

  deployGroup(group: SpawnGroup, initiative: number) {
    group.spawns.forEach(
      spawn => {
        if (!spawn.uid) return;
        let combatants = { };
        for (let i = 0; i < spawn.count; i++) {
          combatants[ uuid.v4().substring(0, 8) ] = {
            ...this.monsters[spawn.uid],
            currentHP: this.monsters[spawn.uid].maxHP
          }
        }
        this.insertCombatGroup(
          {
            combatants,
            initiative,
            type: "monster",
            portrait: this.monsters[spawn.uid].portrait,
            uid: spawn.uid
          }
        )
      }
    )
  }

  applyHealth(groupUID: string, combatantUID: string, data: any) {
    let combatant = this.combat.groups[groupUID].combatants[combatantUID];
    let currentHP: number = combatant.currentHP;
    if ("heal" in data) {
      currentHP += data["heal"];
      if (currentHP > combatant.maxHP) {
        currentHP = combatant.maxHP;
      }
    }
    if ("damage" in data) {
      currentHP -= data["damage"];
      if (currentHP < 0) {
        currentHP = 0;
      }
    }
    this.setCombatant(
      groupUID,
      combatantUID,
      {
        ...combatant,
        currentHP
      }
    );
  }

  removeCombatant(groupUID: string, combatantUID: string) {
    this.zone.run(
      () => {
        delete this.combat.groups[groupUID].combatants[combatantUID];
        this.combat.groups[groupUID].combatants = {
          ...this.combat.groups[groupUID].combatants
        }
        if (Object.keys(this.combat.groups[groupUID].combatants).length === 0) {
          delete this.combat.groups[groupUID];
          this.combat.groups = { ...this.combat.groups };
        }
      }
    )
    this.saveCombat();
  }

  setCombatant(groupUID: string, combatantUID: string, combatant: Combatant) {
    this.combat.groups[groupUID].combatants[combatantUID] = combatant;
    this.saveCombat();
  }

  nextInitiative() {
    if (Object.keys(this.combat.groups).length === 0) {
      return;
    }
    let search = -20;
    let highest = -20;
    for (const [uid, group] of Object.entries(this.combat.groups)) {
      if (group.initiative > highest) {
        highest = group.initiative;
      }
      if (group.initiative < this.combat.initiative && group.initiative > search) {
        search = group.initiative;
      }
    }
    // If initiative didn't change, go to top of the order
    if (search == this.combat.initiative || search == -20) {
      search = highest;
    }
    this.combat.initiative = search;
    this.saveCombat();
  }

  previousInitiative() {
    if (Object.keys(this.combat.groups).length === 0) {
      return;
    }
    let search = 30;
    let lowest = 30;
    for (const [uid, group] of Object.entries(this.combat.groups)) {
      if (group.initiative < lowest) {
        lowest = group.initiative;
      }
      if (group.initiative > this.combat.initiative && group.initiative < search) {
        search = group.initiative;
      }
    }
    // If initiative didn't change, go to top of the order
    if (search == this.combat.initiative || search == 30) {
      search = lowest;
    }
    this.combat.initiative = search;
    this.saveCombat();
  }

  deleteMonster(uid: string) {
    const itemRef = this.db.object(`monsters/${uid}`);
    itemRef.remove();
  }

  saveMonster(uid: string, monster: Monster) {
    this.monsters[uid] = { ...monster }
    const itemRef = this.db.object(`monsters/${uid}`);
    itemRef.set(monster);
  }

  saveEncounter(uid: string, encounter: Encounter) {
    this.encounters[uid] = { ...encounter };
    const itemRef = this.db.object(`encounters/${uid}`);
    itemRef.set(encounter);
  }

  saveCombat() {
    const itemRef = this.db.object(`combat`);
    itemRef.set(this.combat);
  }

  upload(file: any, uid: string) {
    const fileRef = this.storage.ref(uid);
    this.uploadTask = this.storage.upload(uid, file);
    this.uploadPercent = this.uploadTask.percentageChanges();

    this.uploadPercent.subscribe(
      (event) => {
        this.uploadPercentage = event / 100.0;
      },
      (error) => {
        console.log("upload error", error);
      },
      () => {
        const downloadEvents = fileRef.getDownloadURL();
        downloadEvents.toPromise().then(
          (url) => {
            this.saveMonster(uid, 
              {
                ...this.monsters[uid],
                portrait: url
              }
            )
          }
        );
      }
    );
  }

  isDm() {
    if (!this.users) return false;
    return this.users[this.user.uid].role === 'dm';
  }
}
