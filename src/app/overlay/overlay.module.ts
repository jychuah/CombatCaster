import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OverlayPageRoutingModule } from './overlay-routing.module';

import { OverlayPage } from './overlay.page';
import { PipesModule } from '../pipes/pipes.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OverlayPageRoutingModule,
    PipesModule,
    ComponentsModule
  ],
  declarations: [OverlayPage]
})
export class OverlayPageModule {}
