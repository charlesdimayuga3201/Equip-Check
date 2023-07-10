import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { FireExtinguisherPage } from './fire-extinguisher.page';


const routes: Routes = [
  
  {
    path: '',
    component: FireExtinguisherPage
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
    path: 'view', redirectTo: 'view/fire-extinguisher', pathMatch: 'full' 
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FireExtinguisherPageRoutingModule {}
