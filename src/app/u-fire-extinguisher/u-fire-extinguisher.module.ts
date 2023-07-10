import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UFireExtinguisherPageRoutingModule } from './u-fire-extinguisher-routing.module';

import { UFireExtinguisherPage } from './u-fire-extinguisher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UFireExtinguisherPageRoutingModule
  ],
  declarations: [UFireExtinguisherPage]
})
export class UFireExtinguisherPageModule {}
