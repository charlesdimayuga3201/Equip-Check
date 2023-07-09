import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { USprinklerPageRoutingModule } from './u-sprinkler-routing.module';

import { USprinklerPage } from './u-sprinkler.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    USprinklerPageRoutingModule
  ],
  declarations: [USprinklerPage]
})
export class USprinklerPageModule {}
