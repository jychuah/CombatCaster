import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonstersPageRoutingModule } from './monsters-routing.module';

import { MonstersPage } from './monsters.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonstersPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MonstersPage]
})
export class MonstersPageModule {}
