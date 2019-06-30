import { LoginAdminComponent } from './../component/login/login-admin/login-admin.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './../component/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    LoginComponent,
    LoginAdminComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    AuthRoutingModule,
  ]
})
export class AuthModule { }
