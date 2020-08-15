import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import * as uuid from 'uuid';

@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.page.html',
  styleUrls: ['./encounters.page.scss'],
})
export class EncountersPage implements OnInit {

  constructor(public data: DataService, public router: Router) { }

  ngOnInit() {
  }

  add() {
    let uid = uuid.v4().substring(0, 8);
    this.data.saveEncounter(uid, {
      name: 'New Encounter',
      groups: []
    });
    this.router.navigateByUrl(`/edit-encounter/${uid}`);
  }

}
