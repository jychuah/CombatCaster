import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditMonsterPage } from './edit-monster.page';

const routes: Routes = [
  {
    path: ':id',
    component: EditMonsterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditMonsterPageRoutingModule {}
