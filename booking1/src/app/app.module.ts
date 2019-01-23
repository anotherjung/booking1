import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire'; //af2
import { environment } from '../environments/environment'; //af2
import { AngularFirestoreModule } from '@angular/fire/firestore'; //firestore

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase), //af2
    AngularFirestoreModule, //firestore
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
