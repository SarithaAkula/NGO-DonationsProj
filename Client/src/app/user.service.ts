import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from './shared/model/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _url: string = "http://localhost:4000/api/users";

  constructor(private http:HttpClient) { }

  getData(): Observable<user[]>{
    return this.http.get<user[]>(this._url);
  }


  getDetail(userId:string): Observable<user>{
    //console.log(this.http.get<user>(this._url+'/'+userId));
    return this.http.get<user>(this._url+'/'+userId);
  }

  update(userId:string, user: user){
    return this.http.put(this._url+'/'+userId, user);
  }

  delete(userId:string){
    return this.http.delete(this._url+'/'+userId);
  }
}
