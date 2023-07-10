import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatePage } from './update.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatePage,
    children:[
      {
        path: 'u-fire-extinguisher',
        loadChildren: () => import('../u-fire-extinguisher/u-fire-extinguisher.module').then( m => m.UFireExtinguisherPageModule)
      },
      {
        path: 'u-smoke-detector',
        loadChildren: () => import('../u-smoke-detector/u-smoke-detector.module').then( m => m.USmokeDetectorPageModule)
      },
      {
        path: 'u-sprinkler',
        loadChildren: () => import('../u-sprinkler/u-sprinkler.module').then( m => m.USprinklerPageModule)
      },
      {
        path: '',
        redirectTo: '/update/u-fire-extinguisher',
        pathMatch: 'full'
      },
      
    ]
  },
    {
      path: '',
      redirectTo: '/update/u-fire-extinguisher',
      pathMatch: 'full'
    },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatePageRoutingModule {}
