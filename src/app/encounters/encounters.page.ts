import { Component, OnInit } from '@angular/core';
import { EncountersService } from '../encounters.service';

@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.page.html',
  styleUrls: ['./encounters.page.scss'],
})
export class EncountersPage implements OnInit {

  constructor(public encounters: EncountersService) { }

  ngOnInit() {
  }

}
