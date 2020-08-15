import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-player-sync',
  templateUrl: './player-sync.component.html',
  styleUrls: ['./player-sync.component.scss'],
})
export class PlayerSyncComponent implements OnInit {
  uid: string;
  url: string;

  constructor(
    private popoverController: PopoverController,
    public data: DataService) { }

  ngOnInit() {}

  sync() {
    this.popoverController.dismiss(
      {
        uid: this.uid,
        url: `https://character-service.dndbeyond.com/character/v3/character/${this.url}`
      }
    );
  }
  
  close() {
    this.popoverController.dismiss({ "close": 0 });
  }
}
