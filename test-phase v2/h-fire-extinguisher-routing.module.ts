import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HFireExtinguisherPage } from './h-fire-extinguisher.page';

const routes: Routes = [
  {
    path: '',
    component: HFireExtinguisherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HFireExtinguisherPageRoutingModule {}
