import { Injectable } from '@angular/core';
import { UserFront } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  public setUser({
    username,
    firstName,
    lastName,
    email,
    gender,
    image,
  }: UserFront): void {
    localStorage.setItem(
      'user',
      JSON.stringify({ username, firstName, lastName, email, gender, image })
    );
  }

  public getUser(): UserFront | null {
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
  }

  public removeUser(): void {
    localStorage.removeItem('user');
  }
}
