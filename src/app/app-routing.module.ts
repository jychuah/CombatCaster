import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'overlay',
    loadChildren: () => import('./overlay/overlay.module').then( m => m.OverlayPageModule)
  },
  {
    path: 'party',
    loadChildren: () => import('./party/party.module').then( m => m.PartyPageModule)
  },
  {
    path: 'monsters',
    loadChildren: () => import('./monsters/monsters.module').then( m => m.MonstersPageModule)
  },
  {
    path: 'encounters',
    loadChildren: () => import('./encounters/encounters.module').then( m => m.EncountersPageModule)
  },
  {
    path: 'combat',
    loadChildren: () => import('./combat/combat.module').then( m => m.CombatPageModule)
  },
  {
    path: 'edit-monster',
    loadChildren: () => import('./edit-monster/edit-monster.module').then( m => m.EditMonsterPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
