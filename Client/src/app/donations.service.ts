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
}
