import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { TransactionService } from '../../../../data/services/transaction.service';

@Component({
  selector: 'app-payment-done',
  templateUrl: './payment-done.page.html',
  styleUrls: ['./payment-done.page.scss']
})
export class PaymentDonePage {
  private subscription: Subscription = new Subscription();

  constructor(private transactionService: TransactionService) {}

  ionViewWillEnter() {
    this.subscription.add(this.transactionService.getTransactionHistory().subscribe());
  }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }
}
