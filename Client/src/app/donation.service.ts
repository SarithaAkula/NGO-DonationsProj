
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Donations } from './Donations'


@Injectable({
  providedIn: 'root'
})
export class DonationService {

  private _url: string = "http://localhost:4000/donationTypes";

  constructor(private http:HttpClient) { }

  getData(){
    console.log("jsdoe");
    return this.http.get(this._url)
    //.catch(this.errorHandler)
  }
  // errorHandler(error: HttpErrorResponse){
  //   return Observable.throw(error.message || 'Server Error')
  // }


  getDetail(id:string): Observable<Donations>{
    //console.log(this.http.get<user>(this._url+'/'+id));
    return this.http.get<Donations>(this._url+'/'+id);
  }

  update(id:string, Donations:Donations): Observable<Donations>{
    return this.http.put<Donations>(this._url+'/'+id,Donations);
  }


  delete(id:string): Observable<Donations>{
    return this.http.delete<Donations>(this._url+'/'+id);
  }
}