import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { InitiativePipe } from './initiative.pipe';
import { PipPipe } from './pip.pipe';
import { SortMonstersPipe } from './sort-monsters.pipe';

@NgModule({
  imports: [
    IonicModule,
  ],
  declarations: [InitiativePipe, PipPipe, SortMonstersPipe],
  exports: [InitiativePipe, PipPipe, SortMonstersPipe]
})
export class PipesModule {}
