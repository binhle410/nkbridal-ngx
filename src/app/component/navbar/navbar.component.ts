import { AdminServiceService } from './../../services/login/login-service.service';
import { AuthAdminService } from './../../auth/auth-admin.service';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit, HostListener } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  params = new ChangePasswordForm;
  adminIsLoggedIn = false;
  activeForm = false;
  constructor(private activeAdmin: AuthService, private authAdmin: AdminServiceService) {
    this.adminIsLoggedIn = this.activeAdmin.isLoggedInAdmin;
  }

  ngOnInit() {

  }
  isSticky: boolean = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 250;
  }
  /* Admin ChangePassword */
  changePassword(body) {
    this.activeForm = true;
    this.authAdmin.changePassword(body)
      .subscribe(res=>{
        if(res.affectedRows == 0){
          alert('Something went wrong.!!!');
          this.activeForm = false;
        }else{
          alert('Complete.!!!');
          this.params.password = null;
          this.params.new_password = null; 
          this.activeForm = false;
        }
        console.log(res)
      })

  }
}

export class ChangePasswordForm {
  new_password: string;
  password: string;
}
