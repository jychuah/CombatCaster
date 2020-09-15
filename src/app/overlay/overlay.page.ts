import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.page.html',
  styleUrls: ['./overlay.page.scss'],
})
export class OverlayPage implements OnInit {

  constructor(public data: DataService) { }

  ngOnInit() {
  }

  initiative(group) {
    return group.initiative == this.data.combat.initiative
  }
}
