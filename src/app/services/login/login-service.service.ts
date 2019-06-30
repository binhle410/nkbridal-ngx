import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const apiUrl = 'http://node-nkbridal.ap-southeast-1.elasticbeanstalk.com/api/';
const login = 'users/login';
const user = 'users/'
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  
  constructor(private http: HttpClient) { }

  login(body):Observable<any>{
    return this.http.get(apiUrl + login + `/${body["user_name"]}` + `/${body["password"]}`);
  }
  changePassword(body):Observable<any>{
    return this.http.put<any>(apiUrl + user,body);
  }
}
