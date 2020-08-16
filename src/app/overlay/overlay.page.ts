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

}
