import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// import { AngularFireModule } from '@angular/fire';
import {provideFirebaseApp, initializeApp } from '@angular/fire/app';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
import{environment} from '../environments/environment';
import {getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAuth,getAuth } from '@angular/fire/auth';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, 
  provideFirebaseApp (() => initializeApp(environment.firebaseConfig)), provideFirestore(() => getFirestore()), provideAuth(() => getAuth()),],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {
  
}
// AngularFireModule.initializeApp(environment.firebaseConfig),AngularFirestoreModule 