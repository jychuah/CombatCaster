import { Component, OnInit, Input } from '@angular/core';
import { CombatGroup } from 'src/app/types';
import { DataService } from 'src/app/data.service';
import { PopoverController } from '@ionic/angular';
import { CombatPopoverComponent } from '../combat-popover/combat-popover.component';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'combat-group',
  templateUrl: './combat-group.component.html',
  styleUrls: ['./combat-group.component.scss'],
})
export class CombatGroupComponent implements OnInit {
  @Input('uid') uid: string;
  @Input('group') group: CombatGroup;
  safeUrl: SafeUrl = null;

  constructor(public data: DataService, public popoverController: PopoverController) {
  }

  ngOnInit() {
    if (!this.safeUrl) {
      this.safeUrl = this.data.getPortrait(this.group.portrait);
    }
  }

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

  initiative() {
    return this.group.initiative == this.data.combat.initiative
  }

  showAttacks() {
    return this.data.isDm() && this.data.monsters 
      && this.data.monsters[this.group.uid] && this.group.type === 'monster';
  }

  remove(uid: string) {
    this.data.removeCombatant(this.uid, uid);
  }

}
