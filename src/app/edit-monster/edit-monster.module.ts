import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditMonsterPageRoutingModule } from './edit-monster-routing.module';

import { EditMonsterPage } from './edit-monster.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditMonsterPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EditMonsterPage]
})
export class EditMonsterPageModule {}
