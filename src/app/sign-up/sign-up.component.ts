import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
email:string;
pass:string;
name:string;
  constructor(private auth:AuthService) { }

  register(){
    this.auth.signup(this.email, this.pass, this.name);
  }
  ngOnInit() {
  }

}
