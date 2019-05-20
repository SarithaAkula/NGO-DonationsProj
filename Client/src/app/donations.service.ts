import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Donations } from './donations'

@Injectable({
  providedIn: 'root'
})
export class DonationsService {

  private _url: string = "http://localhost:4000/api/donations";
  constructor(private http:HttpClient) { }
  
  getData(): Observable<Donations[]>{
    return this.http.get<Donations[]>(this._url);
  }

  getDetail(donationId:string): Observable<Donations>{
   return this.http.get<Donations>(this._url+'/'+donationId);
  }

  update(donationId:string, donations: Donations){
   return this.http.put(this._url+'/'+donationId, donations);
  }

  delete(donationId:string){
   return this.http.delete(this._url+'/'+donationId);
  }
  add(Donations:Donations) {
    return this.http.post<any>(this._url, Donations);
  }
  // getData(): Observable<Donations[]>{
  //   return this.http.get<Donations[]>(this._url);
  // }
  // getDetail(donationId:string): Observable<Donations>{
  //   return this.http.get<Donations>(this._url+'/'+donationId);
  // }
  // update(id:string, Donations:Donations): Observable<Donations>{
  //   return this.http.put<Donations>(this._url+'/'+id,Donations);
  // }
  // delete(id:string): Observable<Donations>{
  //   return this.http.delete<Donations>(this._url+'/'+id);
  // }
  // add(Donations:Donations) {
  //   return this.http.post<any>(this._url, Donations);
  // }
}
