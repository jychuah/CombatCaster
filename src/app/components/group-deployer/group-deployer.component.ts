import { Component, OnInit, Input } from '@angular/core';
import { SpawnGroup } from 'src/app/types';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'group-deployer',
  templateUrl: './group-deployer.component.html',
  styleUrls: ['./group-deployer.component.scss'],
})
export class GroupDeployerComponent implements OnInit {
  @Input('spawngroup') spawngroup: SpawnGroup;
  @Input('index') index: number;
  initiative: number;
  constructor(public data: DataService) { }

  ngOnInit() {}

  deploy($event) {
    this.data.deployGroup(this.spawngroup, $event.initiative);
  }
}
