import { Component, OnInit, Input } from '@angular/core';
import { Encounter } from '../../types';

@Component({
  selector: 'encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.scss'],
})
export class EncounterComponent implements OnInit {
  @Input('encounter') encounter: Encounter;

  constructor() { }

  ngOnInit() {}

}
