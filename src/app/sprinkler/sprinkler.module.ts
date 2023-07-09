import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SprinklerPageRoutingModule } from './sprinkler-routing.module';

import { SprinklerPage } from './sprinkler.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SprinklerPageRoutingModule
  ],
  declarations: [SprinklerPage]
})
export class SprinklerPageModule {}
