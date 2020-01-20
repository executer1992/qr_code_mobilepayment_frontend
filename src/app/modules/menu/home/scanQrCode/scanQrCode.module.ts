import { TransactionModalModule } from './../../../../data/modals/transaction-modal/transaction-modal.module';
import { TransactionModalComponent } from './../../../../data/modals/transaction-modal/transaction-modal.component';
import { TransactionService } from './../../../../data/services/transaction.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { NgModule } from '@angular/core';
import { ScanQrCodePageRoutingModule } from './scanQrCode-routing.module';

import { ScanQrCodePage } from './scanQrCode.page';
import { SharedModule } from '../../../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [SharedModule, ScanQrCodePageRoutingModule, TranslateModule, TransactionModalModule],
  declarations: [ScanQrCodePage],
  entryComponents: [ScanQrCodePage, TransactionModalComponent],
  providers: [BarcodeScanner, TransactionService]
})
export class ScanQrCodePageModule {}
