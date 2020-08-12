import { Component, OnInit } from '@angular/core';
import { EncountersService } from '../encounters.service';

@Component({
  selector: 'app-party',
  templateUrl: './party.page.html',
  styleUrls: ['./party.page.scss'],
})
export class PartyPage implements OnInit {

  constructor(public encounters: EncountersService) { }

  ngOnInit() {
  }

}
