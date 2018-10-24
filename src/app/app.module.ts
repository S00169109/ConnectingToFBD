import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {Routes, RouterModule} from '@angular/router'
import {AngularFireModule} from '@angular/fire';
import {MatCard} from '@angular/material';
import {AuthGuard} from './service/auth.guard'
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment.prod';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

 const routes:Routes=[
  {path:'', redirectTo:'login', pathMatch:'full', canActivate:[AuthGuard]},
  {path:'home', component:AppComponent, canActivate:[AuthGuard]},
  {path:'login',  component:LoginComponent},
  {path:'sign-up',  component:SignUpComponent},
  {path:'**', redirectTo:'login', canActivate:[AuthGuard]}

] ;
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.Firebase),
    AngularFirestoreModule,
    RouterModule.forRoot(routes),
    MatCard
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
