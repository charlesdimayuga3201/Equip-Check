import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UFireExtinguisherPage } from './u-fire-extinguisher.page';

const routes: Routes = [
  {
    path: '',
    component: UFireExtinguisherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UFireExtinguisherPageRoutingModule {}
