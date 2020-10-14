import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../data.service';
@Component({
  selector: 'player-deployer',
  templateUrl: './player-deployer.component.html',
  styleUrls: ['./player-deployer.component.scss'],
})
export class PlayerDeployerComponent implements OnInit {
  @Input('uid') uid: string;

  constructor(public data: DataService) { }

  ngOnInit() {
  }

  deploy($event) {
    this.data.deployPlayer(this.uid, $event.initiative);
  }

  isPlayerDeployed() {
    return this.data.findInitiative(this.uid) != null;
  }

  findInitiative() {
    return this.data.findInitiative(this.uid);
  }

  setPortrait() {
    this.data.setPortrait(this.uid);
  }
}
