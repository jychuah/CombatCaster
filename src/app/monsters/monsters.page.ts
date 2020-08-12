import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.page.html',
  styleUrls: ['./monsters.page.scss'],
})
export class MonstersPage implements OnInit {

  constructor(public data: DataService) { }

  ngOnInit() {
  }

}
