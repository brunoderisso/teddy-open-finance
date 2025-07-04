import { Route } from '@angular/router';
import { Home } from './components/home/home';

export const appRoutes: Route[] = [
  {
    path: 'customer',
    loadChildren: () => import('customer/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('dashboard/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: Home,
  },
];
