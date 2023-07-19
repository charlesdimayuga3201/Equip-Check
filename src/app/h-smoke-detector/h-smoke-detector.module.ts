import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HSmokeDetectorPageRoutingModule } from './h-smoke-detector-routing.module';

import { HSmokeDetectorPage } from './h-smoke-detector.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HSmokeDetectorPageRoutingModule
  ],
  declarations: [HSmokeDetectorPage]
})
export class HSmokeDetectorPageModule {}
