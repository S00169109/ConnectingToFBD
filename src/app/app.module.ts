import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {Routes, RouterModule} from '@angular/router'
import {AngularFireModule} from '@angular/fire';
import {MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule} from '@angular/material';
import {AuthGuard} from './service/auth.guard';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment.prod';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotesComponent } from './notes/notes.component';
import { AuthService } from './service/auth.service';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


 const routes:Routes=[
  {path:'', redirectTo:'login', pathMatch:'full', canActivate:[AuthGuard]},
  {path:'home', component:AppComponent, canActivate:[AuthGuard]},
  {path:'login',  component:LoginComponent},
  {path:'sign-up',  component:SignUpComponent},
  {path:'**', redirectTo:'login', canActivate:[AuthGuard]}

] ;
@NgModule({
  declarations: [
    
    AppComponent,
    LoginComponent,
    SignUpComponent,
    NavBarComponent,
    NotesComponent
  ],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.Firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
