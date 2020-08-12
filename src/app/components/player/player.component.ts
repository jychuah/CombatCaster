import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../data.service';
@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  @Input('uid') uid: string;
  constructor(private data: DataService) { }

  ngOnInit() { }

  sync() {
    this.data.syncPlayer(this.uid);
  }

}
