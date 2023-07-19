import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HSprinklerPage } from './h-sprinkler.page';

const routes: Routes = [
  {
    path: '',
    component: HSprinklerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HSprinklerPageRoutingModule {}
