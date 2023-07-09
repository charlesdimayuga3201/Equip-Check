import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { USmokeDetectorPageRoutingModule } from './u-smoke-detector-routing.module';

import { USmokeDetectorPage } from './u-smoke-detector.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    USmokeDetectorPageRoutingModule
  ],
  declarations: [USmokeDetectorPage]
})
export class USmokeDetectorPageModule {}
