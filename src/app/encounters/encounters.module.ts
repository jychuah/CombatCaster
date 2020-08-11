import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EncountersPageRoutingModule } from './encounters-routing.module';

import { EncountersPage } from './encounters.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EncountersPageRoutingModule
  ],
  declarations: [EncountersPage]
})
export class EncountersPageModule {}
