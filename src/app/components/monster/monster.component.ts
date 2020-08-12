import { Component, OnInit, Input } from '@angular/core';
import { Monster } from '../../types';
@Component({
  selector: 'monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.scss'],
})
export class MonsterComponent implements OnInit {
  @Input('monster') monster: Monster;
  @Input('compact') display: string = "card";

  constructor() { }

  ngOnInit() {}

}
