import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { NgModule } from '@angular/core';
import { ScanQrCodePageRoutingModule } from './scanQrCode-routing.module';

import { ScanQrCodePage } from './scanQrCode.page';
import { SharedModule } from '../../../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [SharedModule, ScanQrCodePageRoutingModule, TranslateModule],
  declarations: [ScanQrCodePage],
  providers: [BarcodeScanner]
})
export class ScanQrCodePageModule {}
