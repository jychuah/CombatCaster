import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonstersPageRoutingModule } from './monsters-routing.module';

import { MonstersPage } from './monsters.page';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonstersPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [MonstersPage]
})
export class MonstersPageModule {}
