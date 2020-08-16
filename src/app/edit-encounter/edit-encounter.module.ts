import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditEncounterPageRoutingModule } from './edit-encounter-routing.module';

import { EditEncounterPage } from './edit-encounter.page';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditEncounterPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [EditEncounterPage]
})
export class EditEncounterPageModule {}
