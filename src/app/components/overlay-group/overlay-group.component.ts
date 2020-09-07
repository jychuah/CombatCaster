import { Component, OnInit, Input} from '@angular/core';
import { CombatGroup } from 'src/app/types';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'overlay-group',
  templateUrl: './overlay-group.component.html',
  styleUrls: ['./overlay-group.component.scss'],
})
export class OverlayGroupComponent implements OnInit {
  @Input('uid') uid: string;
  @Input('group') group: CombatGroup;
  thumbnailKey: string;

  constructor(public data: DataService) { }

  ngOnInit() {
    this.thumbnailKey = `${this.group.uid}.thumbnail`;
    console.log(this.group);
  }

  initiative() {
    return this.group.initiative == this.data.combat.initiative
  }

  armor() {
    if (this.group.type === 'monster') {
      return this.data.monsters[this.group.uid].ac;
    }
    if (this.group.type === 'party') {
      return this.data.party[this.group.uid].ac;
    }
  }

  showAttacks() {
    return this.data.monsters && this.data.monsters[this.group.uid] && 
      this.group.type === 'monster' && this.initiative();
  }

}
