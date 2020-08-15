import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-combat-popover',
  templateUrl: './combat-popover.component.html',
  styleUrls: ['./combat-popover.component.scss'],
})
export class CombatPopoverComponent implements OnInit {
  value: number;

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {}

  heal() {
    this.popoverController.dismiss({ "heal": this.value });
  }

  damage() {
    this.popoverController.dismiss({ "damage": this.value });
  }

  close() {
    this.popoverController.dismiss({ "close": 0 });
  }
}
