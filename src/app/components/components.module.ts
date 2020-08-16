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
import { PipPipe } from 'src/app/pip.pipe';

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
    PlayerComponent,
    PlayerDeployerComponent,
    GroupDeployerComponent,
    DeployComponent,
    CombatGroupComponent,
    CombatPopoverComponent,
    PlayerSyncComponent,
    HealthBarComponent,
    PipPipe
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
    HealthBarComponent
  ]
})
export class ComponentsModule {}
