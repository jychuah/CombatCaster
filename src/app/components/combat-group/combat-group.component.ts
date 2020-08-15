import { Component, OnInit, Input } from '@angular/core';
import { CombatGroup } from 'src/app/types';
import { DataService } from 'src/app/data.service';
import { PopoverController } from '@ionic/angular';
import { CombatPopoverComponent } from '../combat-popover/combat-popover.component';

@Component({
  selector: 'combat-group',
  templateUrl: './combat-group.component.html',
  styleUrls: ['./combat-group.component.scss'],
})
export class CombatGroupComponent implements OnInit {
  @Input('uid') uid: string;
  @Input('group') group: CombatGroup;
  constructor(public data: DataService, public popoverController: PopoverController) { }

  ngOnInit() {}

  async showCombatPopover(combatantUID: string) {
    const popover = await this.popoverController.create(
      {
        component: CombatPopoverComponent,
      }
    )
    await popover.present();
    let result = await popover.onDidDismiss();
    if ("close" in result.data) return;
    this.data.applyHealth(this.uid, combatantUID, result.data);
  }

}
