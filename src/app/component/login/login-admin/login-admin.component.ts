import { AdminServiceService } from './../../../services/login/login-service.service';
import { AuthService } from './../../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/collections/info-property';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {
  message: string;
  userName;
  password;
  isLoggedIn = false;
  constructor(private router: Router, private service: AdminServiceService, private authService: AuthService) { }

  ngOnInit() {
  }


  setMessage() {
    this.message = 'Logged' + (this.isLoggedIn ? 'in' : 'out')
  }

  login() {
    let bodyParams = {
      "user_name": this.userName,
      "password": this.password
    }

    this.service.login(bodyParams)
      .subscribe(res => {

        setTimeout(() => {
          if (bodyParams.user_name == null || bodyParams.password == null) {
            alert("Please insert into form.!!!");
            return false;
          }else {
            if (bodyParams.user_name == res[0].user_name && bodyParams.password == res[0].password) {
              this.authService.loginAdmin(true)
                .subscribe(() => {
                  this.setMessage();
                  if (this.authService.isLoggedInAdmin) {
                    let redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/home/upload';

                    this.router.navigateByUrl(redirect);
                  }
                })
              return true;
            }
            return true;
          }
        }, 500)

      })


  }

}
