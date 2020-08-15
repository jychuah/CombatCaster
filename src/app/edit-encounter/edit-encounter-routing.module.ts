import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditEncounterPage } from './edit-encounter.page';

const routes: Routes = [
  {
    path: ':uid',
    component: EditEncounterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditEncounterPageRoutingModule {}
