import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Encounter } from 'src/app/types';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-encounter',
  templateUrl: './edit-encounter.page.html',
  styleUrls: ['./edit-encounter.page.scss'],
})
export class EditEncounterPage implements OnInit {
  encounter: Encounter;
  uid: string;

  constructor(
    private route: ActivatedRoute,
    private data: DataService,
    public router: Router) {
    this.route.params.subscribe(
      params => {
        this.encounter = { ...this.data.encounters[params.uid] };
        this.uid = params.uid;
      }
    );
  }

  ngOnInit() {
  }

  newAttack() {
  }

  cancel() {
    this.router.navigateByUrl('/tabs/encounters');
  }

  save() {
    this.data.saveEncounter(this.uid, this.encounter);
    this.cancel();
  }

  firstMonsterUID() {
    return Object.keys(this.data.monsters)[0];
  }

  addMonster(groupIndex: number) {
    this.encounter.groups[groupIndex].spawns = [
      ...this.encounter.groups[groupIndex].spawns,
      {
        uid: this.firstMonsterUID(),
        count: 0
      }
    ]
  }

  addGroup() {
    this.encounter.groups = [
      ...this.encounter.groups,
      {
        spawns: []
      }
    ]
  }

  deleteGroup(groupIndex: number) {
    this.encounter.groups.splice(groupIndex, 1);
  }

}
