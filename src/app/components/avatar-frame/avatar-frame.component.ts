import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'avatar-frame',
  templateUrl: './avatar-frame.component.html',
  styleUrls: ['./avatar-frame.component.scss'],
})
export class AvatarFrameComponent implements OnInit {
  @Input('uid') uid: string;
  @Input('armor') armor: number;
  @Input('large') large: boolean = false;
  
  public thumbnailKey: string;
  
  constructor(public data: DataService) { }

  ngOnInit() {
    this.thumbnailKey = `${this.uid}.thumbnail`;
  }

}
