import { Component, OnInit, Input } from '@angular/core';
import { Combatant } from '../../types';
@Component({
  selector: 'app-standee',
  templateUrl: './standee.component.html',
  styleUrls: ['./standee.component.scss'],
})
export class StandeeComponent implements OnInit {
  @Input('combatant') combatant: Combatant;
  constructor() { }

  ngOnInit() {}

}
