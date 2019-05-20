import { Injectable } from '@angular/core';
import { ShoppingCart } from './shared/model/ShoppingCart'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShoppingcartService {

  _url = 'http://localhost:4000/api/shoppingcart';

  constructor(private _http: HttpClient) { }

  addOrder(shoppingcart:ShoppingCart) {
    return this._http.post<any>(this._url, shoppingcart);
  }
}