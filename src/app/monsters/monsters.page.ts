import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import * as uuid from 'uuid';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.page.html',
  styleUrls: ['./monsters.page.scss'],
})
export class MonstersPage implements OnInit {

  constructor(public data: DataService, public router: Router) { }

  ngOnInit() {
  }

  add() {
    let uid = uuid.v4().substring(0, 8);
    this.data.saveMonster(uid, {
      name: 'Monster',
      ac: 10,
      maxHP: 10,
      numAttacks: 1,
      attacks: []
    });
    this.router.navigateByUrl(`/edit-monster/${uid}`);
  }

}
