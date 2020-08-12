import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.page.html',
  styleUrls: ['./encounters.page.scss'],
})
export class EncountersPage implements OnInit {

  constructor(public data: DataService) { }

  ngOnInit() {
  }

}
