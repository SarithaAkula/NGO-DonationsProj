import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Donations } from './donations';

@Injectable({
  providedIn: 'root'
})
export class DonationManagmentService {

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
}

