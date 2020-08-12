import { Component, OnInit } from '@angular/core';
import { EncountersService } from '../encounters.service';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.page.html',
  styleUrls: ['./monsters.page.scss'],
})
export class MonstersPage implements OnInit {

  constructor(public encounters: EncountersService) { }

  ngOnInit() {
  }

}
