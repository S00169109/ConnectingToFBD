import { Injectable } from '@angular/core';
import {Iproducts} from './iproducts';
import {AngularFirestoreCollection, AngularFirestore} from '@angular/fire/firestore'
import { from } from 'rxjs';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
products_collection:AngularFirestoreCollection<Iproducts>;
Products:Observable<Iproducts[]>;
  constructor( _afs:AngularFirestore) { 
    this.products_collection=_afs.collection("products");
  }
getproducts():Observable<Iproducts[]>{
  this.Products=this.products_collection.valueChanges();
  
  this.Products.subscribe(data=>console.log(data));
  return this.Products
}
}
