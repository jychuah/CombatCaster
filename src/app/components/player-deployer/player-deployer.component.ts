import { Component, OnInit, Input } from '@angular/core';
import { EncountersService } from '../../encounters.service';
import { Player } from 'src/app/types';
@Component({
  selector: 'player-deployer',
  templateUrl: './player-deployer.component.html',
  styleUrls: ['./player-deployer.component.scss'],
})
export class PlayerDeployerComponent implements OnInit {
  @Input('player') player: Player;

  constructor(public encounters: EncountersService) { }

  ngOnInit() {
    console.log(this.player);
  }

}
