import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MonsterComponent } from './monster/monster.component';
import { GroupComponent } from './group/group.component';
import { EncounterComponent } from './encounter/encounter.component';
import { StandeeComponent } from './standee/standee.component';
import { PlayerComponent } from './player/player.component';
import { PlayerDeployerComponent } from './player-deployer/player-deployer.component';
import { GroupDeployerComponent } from './group-deployer/group-deployer.component';
import { DeployComponent } from './deploy/deploy.component';
import { CombatGroupComponent } from './combat-group/combat-group.component';
import { CombatPopoverComponent } from './combat-popover/combat-popover.component';
import { PlayerSyncComponent } from './player-sync/player-sync.component';
import { HealthBarComponent } from './health-bar/health-bar.component';
import { OverlayGroupComponent } from './overlay-group/overlay-group.component';
import { AvatarFrameComponent } from './avatar-frame/avatar-frame.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule
  ],
  declarations: [
    MonsterComponent,
    GroupComponent,
    EncounterComponent,
    StandeeComponent,
    PlayerComponent,
    PlayerDeployerComponent,
    GroupDeployerComponent,
    DeployComponent,
    CombatGroupComponent,
    CombatPopoverComponent,
    PlayerSyncComponent,
    HealthBarComponent,
    OverlayGroupComponent,
    AvatarFrameComponent
  ],
  exports:[
    MonsterComponent,
    GroupComponent,
    EncounterComponent,
    StandeeComponent,
    PlayerComponent,
    PlayerDeployerComponent,
    GroupDeployerComponent,
    DeployComponent,
    CombatGroupComponent,
    CombatPopoverComponent,
    PlayerSyncComponent,
    HealthBarComponent,
    OverlayGroupComponent,
    AvatarFrameComponent
  ]
})
export class ComponentsModule {}
