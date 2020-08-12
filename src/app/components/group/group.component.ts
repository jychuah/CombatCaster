import { Component, OnInit, Input } from '@angular/core';
import { SpawnGroup } from '../../types';
import { EncountersService } from '../../encounters.service';

@Component({
  selector: 'group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent implements OnInit {
  @Input('spawngroup') spawnGroup: SpawnGroup;

  constructor(public encounters: EncountersService) { }

  ngOnInit() {}

}
