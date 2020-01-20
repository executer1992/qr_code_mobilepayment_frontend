import { tap, catchError } from 'rxjs/operators';
import { TransactionService } from './../../../../data/services/transaction.service';
import { TransactionData, TransactionModal } from './../../../../data/models/transactions';
import { TransactionModalComponent } from './../../../../data/modals/transaction-modal/transaction-modal.component';
import { LoaderService } from './../../../../shared/header/loader.service';
import { ToastService, ToastColor } from 'src/app/shared/toast.service';
import { ModalController } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scan-qr-code',
  templateUrl: './scanQrCode.page.html',
  styleUrls: ['./scanQrCode.page.scss']
})
export class ScanQrCodePage implements OnInit {
  public scannedCode = null;

  constructor(
    private barcodeScanner: BarcodeScanner,
    private transactionService: TransactionService,
    public modalController: ModalController,
    private toastService: ToastService,
    private loaderService: LoaderService
  ) {}

  ngOnInit() {}

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
        title: 'myApp.editProduct'
      }
    });
    return await modal.present();
  }

  private addTransaction(transactionData: TransactionData): void {
    this.loaderService.loadingPresent();
    this.transactionService
      .addTransaction(transactionData)
      .pipe(
        tap(async () => {
          await this.loaderService.loadingDismiss();
          await this.modalController.dismiss(null, 'cancel');
          await this.toastService.presentToast('Transaction has been added!', ToastColor.SUCCESS);
        }),
        catchError(error => this.toastService.presentToast(error.message || 'Internal Server Error', ToastColor.WARNING))
      )
      .subscribe();
  }
}
