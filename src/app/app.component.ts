import { Component } from '@angular/core';
import {Iproducts} from './iproducts';
import {AngularFirestoreCollection, AngularFirestore} from '@angular/fire/firestore';
import { from } from 'rxjs';
import {Observable} from 'rxjs';
import {ProductServiceService} from './product-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Ibikedata:Iproducts[];
  constructor(private _Pservice:ProductServiceService) {
    this.getItems();
    
  }
  getItems():void{                                          
    this._Pservice.getproducts().subscribe(data=>{this.Ibikedata=data,
    console.log(this.Ibikedata[0].productid)});                              // THE , ENSURES THERE IS DATA IN THE DATA STREAM OBJ OF TYPE IPRODUCTS
                                                                             
  }
  teaser():void{
    console.log("Now it worked "+this.Ibikedata[0].productid)               // THE DATA ISNT STORED UNTIL THERE IS AN EVENT RAISED OR A CHANGE
  }
}
