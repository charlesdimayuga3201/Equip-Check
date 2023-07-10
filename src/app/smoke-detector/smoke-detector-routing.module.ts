import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmokeDetectorPage } from './smoke-detector.page';

const routes: Routes = [
  {
    path: '',
    component: SmokeDetectorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmokeDetectorPageRoutingModule {}
