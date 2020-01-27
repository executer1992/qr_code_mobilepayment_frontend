import { TransactionService } from './../../../../data/services/transaction.service';
import { TransactionData, TransactionModal } from './../../../../data/models/transactions';
import { TransactionModalComponent } from './../../../../data/modals/transaction-modal/transaction-modal.component';
import { LoaderService } from './../../../../shared/header/loader.service';
import { ToastService } from 'src/app/shared/toast.service';
import { ModalController } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Component } from '@angular/core';
import { handleModalOperations } from '../../../../shared/helpers/pipeOperators';

@Component({
  selector: 'app-scan-qr-code',
  templateUrl: './scanQrCode.page.html',
  styleUrls: ['./scanQrCode.page.scss']
})
export class ScanQrCodePage {
  public scannedCode = null;

  constructor(
    private barcodeScanner: BarcodeScanner,
    private transactionService: TransactionService,
    public modalController: ModalController,
    private toastService: ToastService,
    private loaderService: LoaderService
  ) {}

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      const transactionData: TransactionModal = JSON.parse(barcodeData.text);
      this.openTransactionModal(transactionData);
    });
  }

  async openTransactionModal(transactionData: TransactionModal) {
    const modal = await this.modalController.create({
      component: TransactionModalComponent,
      componentProps: {
        products: transactionData.products,
        client: transactionData.user,
        transactionPrice: transactionData.transaction_price,
        transactionOperation: this.addTransaction.bind(this),
        title: 'myApp.performTransaction'
      }
    });
    return await modal.present();
  }

  private addTransaction(transactionData: TransactionData): void {
    this.loaderService.loadingPresent();
    this.transactionService
      .addTransaction(transactionData)
      .pipe(handleModalOperations(this.loaderService, this.modalController, this.toastService, 'Transaction done!'))
      .subscribe();
  }
}
