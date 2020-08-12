import { Component, OnInit } from '@angular/core';
import { EncountersService } from '../encounters.service';
@Component({
  selector: 'app-combat',
  templateUrl: './combat.page.html',
  styleUrls: ['./combat.page.scss'],
})
export class CombatPage implements OnInit {

  constructor(public encounters: EncountersService) { }

  ngOnInit() {
  }

}
