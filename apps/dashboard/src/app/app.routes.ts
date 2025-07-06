import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    children: [
      {
        path: 'customer',
        loadChildren: () => import('customer/Routes').then((m) => m.remoteRoutes),
      }
    ]
  }
];
