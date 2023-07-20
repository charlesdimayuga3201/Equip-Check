import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HSprinklerPageRoutingModule } from './h-sprinkler-routing.module';

import { HSprinklerPage } from './h-sprinkler.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HSprinklerPageRoutingModule
  ],
  declarations: [HSprinklerPage]
})
export class HSprinklerPageModule {}
