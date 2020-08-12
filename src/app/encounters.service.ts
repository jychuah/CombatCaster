import { Injectable } from '@angular/core';
import { AppData, Player, Monster, Combatant } from './types';
import { FirebaseService } from './firebase.service';
import { bobash } from './fixtures/players.fixture';
import { kobold } from './fixtures/monsters.fixture';
import { encounter } from './fixtures/encounters.fixture';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

const statBonus = [ 0, -5, -4, -4, -3, -3, -2, -2, 
  -1, -1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10 ];

@Injectable({
  providedIn: 'root'
})
export class EncountersService {
  public data: AppData = {
    party: [ bobash ],
    monsters: [ kobold ],
    encounters: [ encounter ],
    combat: {
      encounter: null,
      combatants: []
    }
  }

  constructor(private firebase: FirebaseService,
              private http: HttpClient,
              private sanitizer: DomSanitizer) {
  }

  getMonster(uid: string) : Monster {
    return this.data.monsters.find(monster => monster.uid === uid);
  }

  replacePlayer(uid: string, player: Player) {
    let index = this.data.party.findIndex(item => item.uid === player.uid);
    this.data.party.splice(index, 1, player);
  }

  runEncounter(uid: string) {
    this.data.combat.encounter = { ...(this.data.encounters.find(encounter => encounter.uid === uid))}
    this.data.combat.combatants = [ ];
  }

  syncPlayer(uid: string) {
    let player: Player = this.data.party.find(player => player.uid === uid);
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
}
