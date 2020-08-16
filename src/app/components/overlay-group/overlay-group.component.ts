import { Component, OnInit, Input} from '@angular/core';
import { CombatGroup } from 'src/app/types';
import { DataService } from 'src/app/data.service';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'overlay-group',
  templateUrl: './overlay-group.component.html',
  styleUrls: ['./overlay-group.component.scss'],
})
export class OverlayGroupComponent implements OnInit {
  @Input('uid') uid: string;
  @Input('group') group: CombatGroup;
  safeUrl: SafeUrl = null;

  constructor(public data: DataService) { }

  ngOnInit() {
    if (!this.safeUrl) {
      this.safeUrl = this.data.getPortrait(this.group.portrait);
    }
  }

  initiative() {
    return this.group.initiative == this.data.combat.initiative
  }

  showAttacks() {
    return this.data.monsters && this.data.monsters[this.group.uid] && 
      this.group.type === 'monster' && this.initiative();
  }

}
