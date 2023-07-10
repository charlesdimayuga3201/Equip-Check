import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SprinklerPage } from './sprinkler.page';

const routes: Routes = [
  {
    path: '',
    component: SprinklerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SprinklerPageRoutingModule {}
