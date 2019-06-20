import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivate
} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, snapshot: RouterStateSnapshot) {
    if (this.authService && this.authService.authInfo) {
      //const { accessToken } = this.authService.authInfo;
     const { accessToken } = JSON.parse(localStorage.getItem('auth'));
      if (accessToken) {
        return true;
      }
    }

    this.router.navigate(['/home']);

    return false;
  }
}
