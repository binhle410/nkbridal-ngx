import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  message: string;
  inputPWD;
  constructor(private router: Router, public authService: AuthService) {
    this.setMessage();
   }
  ngOnInit() {
  }


  setMessage(){
    this.message = 'Logged' + (this.authService.isLoggedIn ? 'in' : 'out')
  }

  login() {
    this.message = 'Trying to login ...';
    
    this.authService.login(this.inputPWD).subscribe(()=>{
        this.setMessage();
        if(this.authService.isLoggedIn){
          let redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/home';

          this.router.navigateByUrl(redirect);
        }
      })
  }
}
