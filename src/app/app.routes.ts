import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthenticatedGuard } from './core/guards/authenticated.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () =>
      import('@/app/modules/login/components/login.component'),
    canActivate: [AuthenticatedGuard],
  },

  {
    path: 'protected-page',
    loadComponent: () =>
      import(
        '@/app/modules/protected-page/components/protected-page.component'
      ),
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    loadComponent: () =>
      import(
        '@/app/modules/page-not-found/components/page-not-found.component'
      ),
  },
];
