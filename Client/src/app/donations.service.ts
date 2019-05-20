import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Donations } from './shared/model/Donations'

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
  update(id:string, Donations:Donations): Observable<Donations>{
    return this.http.put<Donations>(this._url+'/'+id,Donations);
  }
  delete(id:string): Observable<Donations>{
    return this.http.delete<Donations>(this._url+'/'+id);
  }
  add(Donations:Donations) {
    return this.http.post<any>(this._url, Donations);
  }
}