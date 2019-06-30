import { AuthService } from './auth/auth.service';
import { LoginComponent } from './component/login/login.component';
import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { Routes, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'NKBridalFinal';
  active = false;

  constructor(private route: Router, private authService: AuthService){}

  ngOnInit(){
    
  }

}
