import { UserFront } from '@/app/core/models/user.model';
import { AuthService } from '@/app/core/services/auth.service';
import { UserDataService } from '@/app/core/services/user-data.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-protected-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './protected-page.component.html',
  styleUrls: ['./protected-page.component.css'],
})
export default class ProtectedPageComponent implements OnInit {
  user: UserFront | null = null;
  constructor(
    private authService: AuthService,
    private userService: UserDataService
  ) {}

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser(): void {
    this.user = this.userService.getUser();
  }

  logout(): void {
    this.authService.logout();
  }
}
