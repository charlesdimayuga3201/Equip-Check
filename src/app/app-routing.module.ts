import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


 


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'mapping',
    loadChildren: () => import('./mapping/mapping.module').then( m => m.MappingPageModule)
  },
  {
    path: 'view',
    loadChildren: () => import('./view/view.module').then( m => m.ViewPageModule)
  },
  {
    path: 'update',
    loadChildren: () => import('./update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'smoke-detector',
    loadChildren: () => import('./smoke-detector/smoke-detector.module').then( m => m.SmokeDetectorPageModule)
  },
  {
    path: 'sprinkler',
    loadChildren: () => import('./sprinkler/sprinkler.module').then( m => m.SprinklerPageModule)
  },
  {
    path: 'fire-extinguisher',
    loadChildren: () => import('./fire-extinguisher/fire-extinguisher.module').then( m => m.FireExtinguisherPageModule)
  },
  {
    path: 'u-fire-extinguisher',
    loadChildren: () => import('./u-fire-extinguisher/u-fire-extinguisher.module').then( m => m.UFireExtinguisherPageModule)
  },
  {
    path: 'u-smoke-detector',
    loadChildren: () => import('./u-smoke-detector/u-smoke-detector.module').then( m => m.USmokeDetectorPageModule)
  },
  {
    path: 'u-sprinkler',
    loadChildren: () => import('./u-sprinkler/u-sprinkler.module').then( m => m.USprinklerPageModule)
  },  {
    path: 'history',
    loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'h-fire-extinguisher',
    loadChildren: () => import('./h-fire-extinguisher/h-fire-extinguisher.module').then( m => m.HFireExtinguisherPageModule)
  },


  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
