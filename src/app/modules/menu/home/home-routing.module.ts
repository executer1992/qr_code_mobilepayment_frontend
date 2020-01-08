import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      { path: 'generate', loadChildren: () => import('./generateQrCode/generateQrCode.module').then(m => m.GenerateQrCodePageModule) },
      { path: 'scan', loadChildren: () => import('./scanQrCode/scanQrCode.module').then(m => m.ScanQrCodePageModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
