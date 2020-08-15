import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.scss'],
})
export class EncounterComponent implements OnInit {
  @Input('uid') uid: string;

  constructor(public data: DataService, public router: Router) { }

  ngOnInit() {}

  runEncounter() {
    this.data.runEncounter(this.uid);
  }

  edit() {
    this.router.navigateByUrl(`/edit-encounter/${this.uid}`);
  }

}
