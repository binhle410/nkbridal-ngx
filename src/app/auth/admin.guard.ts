import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate{
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let url: string = state.url;

    return this.checkLoginAdmin(url);
  }

  checkLoginAdmin(url: string): boolean {

    if (this.authService.isLoggedInAdmin) { return true; }

    // 
    this.authService.redirectUrl = url

    this.router.navigate(['/login/admin']);

    // 
    return false;
  }

}
