import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from '../core.models';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: User;
  
  constructor(private http: HttpClient, private authService: AuthService) {}

  getUserProfile() {
    return this.http
      .get(`${environment.apiBaseUrl}/user`)
      .pipe(tap((user: User) => (this.currentUser = user)));
  }
}
