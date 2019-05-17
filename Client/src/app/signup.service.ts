import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { user } from './shared/model/user';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  _url = 'http://localhost:4000/signup';

  constructor(private _http: HttpClient) { }

  signup(user:user) {
    return this._http.post<any>(this._url, user);
  }
}
