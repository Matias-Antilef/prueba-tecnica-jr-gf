import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthResponseModel } from '../models/auth-response.model';
import { UserDataService } from './user-data.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private LOGIN_URL = 'https://dummyjson.com/auth/login';
  private tokenKey = 'authToken';

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private userService: UserDataService
  ) {}

  login(username: string, password: string): Observable<AuthResponseModel> {
    return this.httpClient
      .post<AuthResponseModel>(this.LOGIN_URL, { username, password })
      .pipe(
        tap((response) => {
          if (response.accessToken) {
            this.setToken(response.accessToken);
            this.userService.setUser({
              id: response.id,
              username: response.username,
              email: response.email,
              firstName: response.firstName,
              lastName: response.lastName,
              gender: response.gender,
              image: response.image,
            });
          }
        })
      );
  }

  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  private getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    const token = this.getToken();

    if (!token) {
      return false;
    }

    const payload = JSON.parse(atob(token.split('.')[1]));
    const exp = payload.exp * 1000;
    return Date.now() < exp;
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.userService.removeUser();
    this.router.navigate(['/login']);
  }
}
