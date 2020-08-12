import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../types';
import { EncountersService } from '../../encounters.service';
@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  @Input('player') player: Player;
  constructor(private encounters: EncountersService) { }

  ngOnInit() { }

  sync() {
    console.log(this.player);
    this.encounters.syncPlayer(this.player.uid);
  }

}
