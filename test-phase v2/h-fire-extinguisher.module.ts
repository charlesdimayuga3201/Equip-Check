import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HFireExtinguisherPageRoutingModule } from './h-fire-extinguisher-routing.module';

import { HFireExtinguisherPage } from './h-fire-extinguisher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HFireExtinguisherPageRoutingModule
  ],
  declarations: [HFireExtinguisherPage]
})
export class HFireExtinguisherPageModule {}
