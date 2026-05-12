import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.Home),
  },
  {
    path: 'music',
    loadComponent: () => import('./pages/music/music').then(m => m.Music),
  },
  {
    path: 'music/:slug',
    loadComponent: () => import('./pages/lyrics/lyrics').then(m => m.Lyrics),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then(m => m.About),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then(m => m.Contact),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
