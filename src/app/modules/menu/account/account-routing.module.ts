import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountPage } from './account.page';

const routes: Routes = [
  {
    path: '',
    component: AccountPage,
    children: [
      {
        path: 'balance',
        loadChildren: () => import('./balance/balance.module').then( m => m.BalancePageModule),
      },
      {
        path: 'payment-done',
        loadChildren: () => import('./payment-done/payment-done.module').then( m => m.PaymentDonePageModule)
      },
      {
        path: 'payment-received',
        loadChildren: () => import('./payment-received/payment-received.module').then( m => m.PaymentReceivedPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountPageRoutingModule {}
