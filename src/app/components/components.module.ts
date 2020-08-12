import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MonsterComponent } from './monster/monster.component';
import { GroupComponent } from './group/group.component';
import { EncounterComponent } from './encounter/encounter.component';
import { StandeeComponent } from './standee/standee.component';
import { PlayerComponent } from './player/player.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [
    MonsterComponent,
    GroupComponent,
    EncounterComponent,
    StandeeComponent,
    PlayerComponent
  ],
  exports:[
    MonsterComponent,
    GroupComponent,
    EncounterComponent,
    StandeeComponent,
    PlayerComponent
  ]
})
export class ComponentsModule {}
