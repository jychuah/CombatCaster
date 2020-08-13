import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../data.service';
@Component({
  selector: 'player-deployer',
  templateUrl: './player-deployer.component.html',
  styleUrls: ['./player-deployer.component.scss'],
})
export class PlayerDeployerComponent implements OnInit {
  @Input('uid') uid: string;
  initiative: number;

  constructor(public data: DataService) { }

  ngOnInit() {
  }

  deploy() {
    this.data.deployPlayer(this.uid, this.initiative);
  }

}
