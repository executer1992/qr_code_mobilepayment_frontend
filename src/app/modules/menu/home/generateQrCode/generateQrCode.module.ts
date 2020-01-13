import { NgxQRCodeModule } from 'ngx-qrcode2';
import { NgModule } from '@angular/core';
import { GenerateQrCodePageRoutingModule } from './generateQrCode-routing.module';

import { GenerateQrCodePage } from './generateQrCode.page';
import { SharedModule } from '../../../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [SharedModule, GenerateQrCodePageRoutingModule, NgxQRCodeModule, TranslateModule],
  declarations: [GenerateQrCodePage]
})
export class GenerateQrCodePageModule {}
