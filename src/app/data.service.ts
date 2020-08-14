import { Injectable } from '@angular/core';
import { 
  EncounterMap,
  PlayerMap,
  MonsterMap,
  Combat, Player, SpawnGroup, Monster, Combatant } from './types';
import { FirebaseService } from './firebase.service';
import { bobash } from './fixtures/players.fixture';
import { kobold, goblin } from './fixtures/monsters.fixture';
import { encounter } from './fixtures/encounters.fixture';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';


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
    combatants: []
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
    this.combat.combatants = [ ];
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

  getPortrait(combatant: Combatant) : SafeUrl {
    if (combatant.portrait) {
      return this.sanitizer.bypassSecurityTrustUrl(combatant.portrait);
    } else {
      return null;
    }
  }

  insertCombatant(combatant: Combatant) {
    let index = 0;

    if (this.combat.combatants.length === 0) {
      this.combat.combatants = [ combatant ];
      return;
    }
    while (index < this.combat.combatants.length && 
           this.combat.combatants[index].initiative >= combatant.initiative) {
      index += 1;
    }
    this.combat.combatants.splice(index, 0, combatant);
  }

  deployPlayer(uid: string, initiative: number) {
    this.insertCombatant({...this.party[uid], initiative, type: "player" });
  }

  deployGroup(group: SpawnGroup, initiative: number) {
    for (const [ monsterUID, count ] of Object.entries(group)) {
      for (let i = 0; i < count; i++) {
        this.insertCombatant(
          {
            ...this.monsters[monsterUID], 
            initiative,
            currentHP: this.monsters[monsterUID].maxHP,
            type: "monster"
          }
        )
      }
    }
  }
}
