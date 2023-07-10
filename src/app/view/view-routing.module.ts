import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewPage } from './view.page';



const routes: Routes = [
  {
    path: '',
    component: ViewPage,
    children:[
    {
      path: 'fire-extinguisher',
      loadChildren: () => import('../fire-extinguisher/fire-extinguisher.module').then( m => m.FireExtinguisherPageModule)
    },
    {
      path: 'smoke-detector',
      loadChildren: () => import('../smoke-detector/smoke-detector.module').then( m => m.SmokeDetectorPageModule)
    },
    {
      path: 'sprinkler',
      loadChildren: () => import('../sprinkler/sprinkler.module').then( m => m.SprinklerPageModule)
    },

    {
      path: '',
      redirectTo: '/view/fire-extinguisher',
      pathMatch: 'full'
    },
  ]
  },
  {
    path: '',
    redirectTo: '/view/fire-extinguisher',
    pathMatch: 'full'
  }

  

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewPageRoutingModule {}
