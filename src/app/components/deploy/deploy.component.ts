import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'deploy',
  templateUrl: './deploy.component.html',
  styleUrls: ['./deploy.component.scss'],
})
export class DeployComponent implements OnInit {
  initiative: number;
  @Output('onDeploy') onDeploy: EventEmitter<any> = new EventEmitter();
  @Input('allowRandom') allowRandom: boolean = false;
  
  constructor() { }

  ngOnInit() {}

  deployClick() {
    if (this.allowRandom && !this.initiative) {
      this.initiative = Math.floor(Math.random() * 20) + 1;

    }
    this.onDeploy.emit({ initiative: this.initiative });
  }

}
