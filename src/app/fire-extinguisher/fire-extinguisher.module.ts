import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FireExtinguisherPageRoutingModule } from './fire-extinguisher-routing.module';

import { FireExtinguisherPage } from './fire-extinguisher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FireExtinguisherPageRoutingModule
  ],
  declarations: [FireExtinguisherPage]
})
export class FireExtinguisherPageModule {}
