import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EncountersPage } from './encounters.page';

const routes: Routes = [
  {
    path: '',
    component: EncountersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EncountersPageRoutingModule {}
