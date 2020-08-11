import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OverlayPageRoutingModule } from './overlay-routing.module';

import { OverlayPage } from './overlay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OverlayPageRoutingModule
  ],
  declarations: [OverlayPage]
})
export class OverlayPageModule {}
