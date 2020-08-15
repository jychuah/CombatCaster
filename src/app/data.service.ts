import { Injectable } from '@angular/core';
import { 
  EncounterMap,
  PlayerMap,
  MonsterMap,
  Combat, Player, SpawnGroup, 
  Monster, 
  CombatGroup,
  Combatant } from './types';
import { FirebaseService } from './firebase.service';
import { bobash } from './fixtures/players.fixture';
import { kobold, goblin } from './fixtures/monsters.fixture';
import { encounter } from './fixtures/encounters.fixture';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import * as uuid from 'uuid';


const statBonus = [ 0, -5, -4, -4, -3, -3, -2, -2, 
  -1, -1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10 ];

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public party: PlayerMap = {
    'zHMuP33p9SfmILdQHNiy9oLBor93': bobash,
  }
  public monsters: MonsterMap = {
    'kobold001': kobold,
    'goblin001': goblin,
  }
  public encounters: EncounterMap = {
    'encounters001': encounter
  }

  combat: Combat = {
    encounter: null,
    groups: { }
  }

  constructor(private firebase: FirebaseService,
              private http: HttpClient,
              private sanitizer: DomSanitizer,
              private router: Router) {
  }


  replacePlayer(uid: string, player: Player) {
    this.party[uid] = { ...player };
  }

  runEncounter(uid: string) {
    this.combat.encounter = { ...(this.encounters[uid])}
    this.combat.groups = { };
    this.router.navigateByUrl('/tabs/combat');
  }

  syncPlayer(uid: string) {
    let player: Player = { ...this.party[uid] };
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

  getPortrait(portrait: string) : SafeUrl {
    if (portrait) {
      return this.sanitizer.bypassSecurityTrustUrl(portrait);
    } else {
      return null;
    }
  }

  insertCombatGroup(group: CombatGroup) {
    this.combat.groups = {
      ...this.combat.groups,
      [ uuid.v4().substring(0, 8) ]: group
    };
  }

  deployPlayer(uid: string, initiative: number) {
    let group: CombatGroup = {
      combatants: {
        [uid]: {...this.party[uid], currentHP: this.party[uid].maxHP},
      },
      initiative,
      type: "player",
      portrait: this.party[uid].portrait,
      uid
    }
    this.insertCombatGroup(group);
  }

  deployGroup(group: SpawnGroup, initiative: number) {
    for (const [ uid, count ] of Object.entries(group)) {
      let combatants = { };
      for (let i = 0; i < count; i++) {
        combatants[ uuid.v4().substring(0, 8) ] = {
          ...this.monsters[uid],
          currentHP: this.monsters[uid].maxHP
        }
      }
      this.insertCombatGroup(
        {
          combatants,
          initiative,
          type: "monster",
          portrait: null,
          uid
        }
      )
    }
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

  setCombatant(groupUID: string, combatantUID: string, combatant: Combatant) {
    this.combat.groups[groupUID].combatants[combatantUID] = combatant;
  }
}
