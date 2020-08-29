import { Component, OnInit, Input } from '@angular/core';
import { SpawnGroup } from '../../types';
import { DataService } from '../../data.service';

@Component({
  selector: 'group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent implements OnInit {
  @Input('spawngroup') spawnGroup: SpawnGroup;

  constructor(public data: DataService) {
  }

  ngOnInit() {}

  setPortrait(uid: string) {
    this.data.setPortrait(uid);
  }

}
