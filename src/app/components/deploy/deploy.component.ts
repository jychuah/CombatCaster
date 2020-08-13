import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'deploy',
  templateUrl: './deploy.component.html',
  styleUrls: ['./deploy.component.scss'],
})
export class DeployComponent implements OnInit {
  initiative: number;
  @Output('onDeploy') onDeploy: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {}

  deployClick() {
    this.onDeploy.emit({ initiative: this.initiative });
  }

}
