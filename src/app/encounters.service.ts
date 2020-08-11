import { Injectable } from '@angular/core';
import { Combatant, Player, Monster, Encounter, AppData } from './types';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class EncountersService {
  public data: AppData = {
    players: [],
    monsters: [],
    encounters: []
  }

  constructor(private firebase: FirebaseService) {
  }
}
