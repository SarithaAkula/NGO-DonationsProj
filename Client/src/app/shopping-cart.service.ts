import { Injectable } from '@angular/core';
import { ShoppingCart } from './ShoppingCart';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private _url: string = "http://localhost:4000/api/shoppingcart";

  constructor(private http:HttpClient) { }

  
  getData(): Observable<ShoppingCart[]>{
     return this.http.get<ShoppingCart[]>(this._url);
  }

  getDetail(shoppingcartId:string): Observable<ShoppingCart>{
    return this.http.get<ShoppingCart>(this._url+'/'+shoppingcartId);
  }

  update(shoppingcartId:string, shoppingcart: ShoppingCart){
    return this.http.put(this._url+'/'+shoppingcartId, shoppingcart);
  }

  delete(shoppingcartId:string){
    return this.http.delete(this._url+'/'+shoppingcartId);
  }
}
