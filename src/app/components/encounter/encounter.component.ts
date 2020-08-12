import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.scss'],
})
export class EncounterComponent implements OnInit {
  @Input('uid') uid: string;

  constructor(public data: DataService) { }

  ngOnInit() {}

}
