import { Component, OnInit, Input } from '@angular/core';
import { CombatGroup } from 'src/app/types';

@Component({
  selector: 'combat-group',
  templateUrl: './combat-group.component.html',
  styleUrls: ['./combat-group.component.scss'],
})
export class CombatGroupComponent implements OnInit {
  @Input('group') group: CombatGroup;
  @Input('controls') controls: boolean = false;
  constructor() { }

  ngOnInit() {}

}
