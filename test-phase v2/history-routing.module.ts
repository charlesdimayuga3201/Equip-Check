import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryPage } from './history.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryPage,
    children:[
      {
        path: 'h-fire-extinguisher',
        loadChildren: () => import('../h-fire-extinguisher/h-fire-extinguisher.module').then( m => m.HFireExtinguisherPageModule)
      },
      // {
      //   path: 'smoke-detector',
      //   loadChildren: () => import('../h-smoke-detector/h-smoke-detector.module').then( m => m.HSmokeDetectorPageModule)
      // },
      // {
      //   path: 'sprinkler',
      //   loadChildren: () => import('../h-sprinkler/h-sprinkler.module').then( m => m.HSprinklerPageModule)
      // },
  
      {
        path: '',
        redirectTo: '/history/h-fire-extinguisher',
        pathMatch: 'full'
      },
    ]
    
  },
  {
    path: '',
    redirectTo: '/history/h-fire-extinguisher',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryPageRoutingModule {}
