import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CombatPageRoutingModule } from './combat-routing.module';

import { CombatPage } from './combat.page';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CombatPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [CombatPage]
})
export class CombatPageModule {}
