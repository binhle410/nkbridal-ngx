import { LoginComponent } from './../component/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginAdminComponent } from '../component/login/login-admin/login-admin.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'login/admin', component: LoginAdminComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
