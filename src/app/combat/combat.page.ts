import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { DataService } from '../data.service';
import { CombatGroup } from 'src/app/types';

@Component({
  selector: 'app-combat',
  templateUrl: './combat.page.html',
  styleUrls: ['./combat.page.scss'],
})
export class CombatPage implements OnInit {
  collapseStaging: boolean = false;

  constructor(public data: DataService, public platform: Platform) {
  }

  ngOnInit() {
  }

  toggleCollapse() {
    this.collapseStaging = !this.collapseStaging;
  }

  next() {
    this.data.nextInitiative();
    let group: CombatGroup = this.data.getCurrentGroup(this.data.combat.initiative);
    this.data.setPortrait(group.uid);
  }

  previous() {
    this.data.previousInitiative();
  }
}
