import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
 import { NotificationService } from '../notification.service';
import * as firebase from 'firebase/';

@Injectable({
  providedIn: 'root'
})
 
export class AuthService {
  
  private user: Observable<firebase.User>;
  loggedInStatus: boolean = false;

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router, private notifier: NotificationService) {
    this.user = _firebaseAuth.authState;
  }

  signup(email: string, password: string, name: string) {
    // clear all messages
    this.notifier.display(false, '');
    this._firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        this.sendEmailVerification();
        const message = 'A verification email has been sent, please check your email and follow the steps!';
        this.notifier.display(true, message);
        console.log()
        return firebase.database().ref('Employees/' + name).set({
          email: res.user.email,
          uid: res.user.uid,
          registrationDate: new Date().toString(),
          name: name
          // The .ref automatically puts u in the realtime database section you created
          // You as the coder instantiates a new table column and .set the table row data
        })
          .then(() => {
            firebase.auth().signOut();
           // this.router.navigate(['login']);
          });
      })
      .catch(err => {
        console.log(err);
        this.notifier.display(true, err.message);
      });
  }

  sendEmailVerification() {
    this._firebaseAuth.authState.subscribe(user => {
      user.sendEmailVerification()
        .then(() => {
          console.log('email sent');
        });
    });
  }

  /* doRegister(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(res => {
        resolve(res);
      }, err => reject(err))
    })
  } */

  doLogin(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
      .then(res => {
        resolve(res);
        this.loggedInStatus = true;
      }, err => reject(err))
    })
  }

  doLogout(){
    return new Promise((resolve, reject) => {
      if(firebase.auth().currentUser){
        this._firebaseAuth.auth.signOut()
        resolve();
      }
      else{
        reject();
      }
      this.loggedInStatus = false;

    });
  }

  isLoggedIn():boolean {
      return this.loggedInStatus;
  }
}
