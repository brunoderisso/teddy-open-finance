import { Route } from '@angular/router';
import { App } from './app';

export const appRoutes: Route[] = [
  {
    path: '',
    component: App,
    children: [
      {
        path: 'customer',
        loadChildren: () => import('customer/Routes').then((m) => m.remoteRoutes),
      }
    ]
  }
];
