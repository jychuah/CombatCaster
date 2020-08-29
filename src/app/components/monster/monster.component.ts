import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.scss'],
})
export class MonsterComponent implements OnInit {
  @Input('uid') uid: string;
  collapse: boolean = true;
  thumbnailKey: string;
  portraitKey: string;

  constructor(public data: DataService, public router: Router) { }

  ngOnInit() {
    this.thumbnailKey = `${this.uid}.thumbnail`;
    this.portraitKey = `${this.uid}.portrait`;
  }

  edit() {
    this.router.navigateByUrl(`/edit-monster/${this.uid}`);
  }

  delete() {
    this.data.deleteMonster(this.uid);
  }
  
  toggleCollapse() {
    this.collapse = !this.collapse;
  }

  setPortrait() {
    this.data.setPortrait(this.uid);
  }

}
