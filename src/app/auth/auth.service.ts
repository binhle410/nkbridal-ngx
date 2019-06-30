import { AdminServiceService } from './../services/login/login-service.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  password = 'hoilamgi';
  isLoggedIn = false;
  isLoggedInAdmin = false;
  constructor(private service: AdminServiceService) { }
  
  redirectUrl: string;
  
  loginAdmin(_body:boolean):Observable<boolean>{
      if(_body = true){
        return of(true).pipe(
          delay(1000),
          tap(val => {this.isLoggedInAdmin = true, this.isLoggedIn = true})
        );
      }
  }


  login(_password: string): Observable<boolean> {
    if (_password === this.password) {
      return of(true).pipe(
        delay(1000),
        tap(val => {this.isLoggedIn = true, this.isLoggedInAdmin = false})
      );
    }
  }
  logout():void{
    this.isLoggedIn = false;
  }
}
