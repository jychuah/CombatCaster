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

  constructor(public data: DataService, public router: Router) { }

  ngOnInit() {}

  edit() {
    this.router.navigateByUrl(`/edit-monster/${this.uid}`);
  }
  
  toggleCollapse() {
    this.collapse = !this.collapse;
  }

}
