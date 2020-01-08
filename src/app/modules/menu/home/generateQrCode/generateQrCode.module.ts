import { NgxQRCodeModule } from 'ngx-qrcode2';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenerateQrCodePageRoutingModule } from './generateQrCode-routing.module';

import { GenerateQrCodePage } from './generateQrCode.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, GenerateQrCodePageRoutingModule, NgxQRCodeModule],
  declarations: [GenerateQrCodePage]
})
export class GenerateQrCodePageModule {}
