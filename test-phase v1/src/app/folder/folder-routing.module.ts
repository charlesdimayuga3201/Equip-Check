import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage,
  
  },
  {
    path: 'folder/mapping',
    loadChildren: () => import('../mapping/mapping.module').then( m => m.MappingPageModule)
  },
  {
    path: 'folder/view',
    loadChildren: () => import('../view/view.module').then( m => m.ViewPageModule)
  },
  {
    path: 'update',
    loadChildren: () => import('../update/update.module').then( m => m.UpdatePageModule)
  }

 
  // {
  //   path: 'view',
  //   loadChildren: () => import('./folder/view.module').then( m => m.ViewModule)
  // },
  // {
  //   path: 'update',
  //   loadChildren: () => import('./folder/update.module').then( m => m.UpdateModule)
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
