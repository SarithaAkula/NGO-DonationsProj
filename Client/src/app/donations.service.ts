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
    //console.log(this.http.get<user>(this._url+'/'+userId));
    return this.http.get<Donations>(this._url+'/'+donationId);
  }
 
}