import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'combat',
        loadChildren: () => import('../combat/combat.module').then(m => m.CombatPageModule)
      },
      {
        path: 'encounters',
        loadChildren: () => import('../encounters/encounters.module').then(m => m.EncountersPageModule)
      },
      {
        path: 'monsters',
        loadChildren: () => import('../monsters/monsters.module').then(m => m.MonstersPageModule)
      },
      {
        path: 'party',
        loadChildren: () => import('../party/party.module').then(m => m.PartyPageModule)
      },
      {
        path: 'overlay',
        loadChildren: () => import('../overlay/overlay.module').then(m => m.OverlayPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/combat',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/combat',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
