import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanQrCodePage } from './scanQrCode.page';

const routes: Routes = [
  {
    path: '',
    component: ScanQrCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScanQrCodePageRoutingModule {}
