import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signin } from './shared/model/signin'


@Injectable({
  providedIn: 'root'
})
export class SigninService {

  _url = 'http://localhost:4000/signin';

  constructor(private _http: HttpClient) { }

  signin(signin:signin) {
    return this._http.post<any>(this._url, signin);
  }
}
