import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../data.service';
@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  @Input('uid') uid: string;
  thumbnailKey: string;
  portraitKey: string;

  constructor(public data: DataService) { }

  ngOnInit() {
    this.thumbnailKey = `${this.uid}.thumbnail`;
    this.portraitKey = `${this.uid}.portrait`;
  }

  sync() {
    this.data.syncPlayer(this.uid, this.data.party[this.uid].url);
  }

  uploadPortrait($event) {
    this.data.upload($event.target.files[0], this.uid, "portrait");
  }

  statChange($event) {
    this.data.pushPlayer(this.uid);
  }
}
