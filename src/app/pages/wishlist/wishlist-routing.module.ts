import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WishlistPage } from './wishlist.page';

const routes: Routes = [
  {
    path: '',
    component: WishlistPage,
  },
  {
    path: 'create',
    loadChildren: () =>
      import('./create/create.module').then((m) => m.CreatePageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WishlistPageRoutingModule {}
