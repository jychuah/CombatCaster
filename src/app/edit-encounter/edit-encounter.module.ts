import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditEncounterPageRoutingModule } from './edit-encounter-routing.module';

import { EditEncounterPage } from './edit-encounter.page';
import { ComponentsModule } from '../components/components.module';
import { SortMonstersPipe } from '../sort-monsters.pipe';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditEncounterPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EditEncounterPage, SortMonstersPipe]
})
export class EditEncounterPageModule {}
