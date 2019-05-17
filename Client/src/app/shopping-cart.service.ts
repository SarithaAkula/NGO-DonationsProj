import { Injectable } from '@angular/core';
import { ShoppingCart } from './ShoppingCart';
import { getLocaleDateFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  cart:ShoppingCart[];

  constructor() {
    // this.cart =
    // [{username:'Jhon', orderId: 1, donationType:'Mighty Warriors', price:1000, monthly:false, date:Date()},
    // {username:'Jhon', orderId: 1, donationType:'Mighty Warriors', price:2000, monthly:false, date:Date()}];
 }
}
