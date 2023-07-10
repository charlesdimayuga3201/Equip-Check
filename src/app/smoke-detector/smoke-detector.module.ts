import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmokeDetectorPageRoutingModule } from './smoke-detector-routing.module';

import { SmokeDetectorPage } from './smoke-detector.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmokeDetectorPageRoutingModule
  ],
  declarations: [SmokeDetectorPage]
})
export class SmokeDetectorPageModule {}
