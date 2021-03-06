import { Component, OnInit, Input } from '@angular/core';
import { Combatant } from '../../types';
@Component({
  selector: 'standee',
  templateUrl: './standee.component.html',
  styleUrls: ['./standee.component.scss'],
})
export class StandeeComponent implements OnInit {
  @Input('combatant') combatant: Combatant;
  @Input('bars') bars: boolean = true;
  @Input('overlay') overlay: boolean = false;
  constructor() { }

  ngOnInit() {}

}
