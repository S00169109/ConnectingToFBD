import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFirestoreModule} from '@angular/fire/firestore'
import { HttpClient, HttpErrorResponse, HttpClientModule } from '@angular/common/http';

import {AngularFireModule} from '@angular/fire';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment.prod';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClient,
    HttpClientModule,
    HttpErrorResponse,
    AngularFireModule.initializeApp(environment.Firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
