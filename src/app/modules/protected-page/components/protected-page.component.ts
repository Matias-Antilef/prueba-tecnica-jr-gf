import { AuthService } from '@/app/core/services/auth.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-protected-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './protected-page.component.html',
  styleUrls: ['./protected-page.component.css'],
})
export default class ProtectedPageComponent {
  constructor(private authService: AuthService, private router: Router) {}

  logout(): void {
    this.authService.logout();
  }
}
