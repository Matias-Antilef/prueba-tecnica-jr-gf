import { AuthService } from '@/app/core/services/auth.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export default class LoginComponent {
  fb = inject(FormBuilder);

  formLogin: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService
      .login(this.formLogin.value.username, this.formLogin.value.password)
      .subscribe({
        next: () => this.router.navigate(['/protected-page']),
        error: (err) => console.log('Login failed', err),
      });
  }
}
