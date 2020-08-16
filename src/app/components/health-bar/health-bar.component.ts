import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'health-bar',
  templateUrl: './health-bar.component.html',
  styleUrls: ['./health-bar.component.scss'],
})
export class HealthBarComponent implements OnInit {
  @Input('maxHP') maxHP: number;
  @Input('currentHP') currentHP: number;
  constructor() { }

  ngOnInit() {}

  getFullBars() {
    return Math.ceil(this.currentHP / 5);
  }

  getEmptyBars() {
    return Math.ceil(this.maxHP / 5) - this.getFullBars();
  }

}
