import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'cart',
    loadChildren: () => import('cart/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('products/Module').then((m) => m.RemoteEntryModule),
  },
  // {
  //   path: '',
  //   component: NxWelcomeComponent,
  // },
];
