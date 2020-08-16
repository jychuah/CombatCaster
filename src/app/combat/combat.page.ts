import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-combat',
  templateUrl: './combat.page.html',
  styleUrls: ['./combat.page.scss'],
})
export class CombatPage implements OnInit {
  collapseStaging: boolean = false;

  constructor(public data: DataService) {
  }

  ngOnInit() {
  }

  toggleCollapse() {
    this.collapseStaging = !this.collapseStaging;
  }
}
