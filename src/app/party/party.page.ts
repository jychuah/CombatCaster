import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { PopoverController } from '@ionic/angular';
import { PlayerSyncComponent } from 'src/app/components/player-sync/player-sync.component';

@Component({
  selector: 'app-party',
  templateUrl: './party.page.html',
  styleUrls: ['./party.page.scss'],
})
export class PartyPage implements OnInit {

  constructor(public data: DataService, public popoverController: PopoverController) { }

  ngOnInit() {
  }

  async showSyncPopover() {
    const popover = await this.popoverController.create(
      {
        component: PlayerSyncComponent,
      }
    )
    await popover.present();
    let result = await popover.onDidDismiss();
    if ("close" in result.data) return;
    this.data.syncPlayer(result.data.uid, result.data.url);
  }

}
