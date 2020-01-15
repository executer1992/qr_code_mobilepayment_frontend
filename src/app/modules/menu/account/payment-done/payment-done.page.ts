import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { TransactionService } from '../../../../data/services/transaction.service';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-payment-done',
  templateUrl: './payment-done.page.html',
  styleUrls: ['./payment-done.page.scss']
})
export class PaymentDonePage {
  private subscription: Subscription = new Subscription();
  public transactions: number = 0;

  constructor(private transactionService: TransactionService) {}

  ionViewWillEnter() {
    this.subscription.add(
      this.transactionService
        .getTransactionHistory()
        .pipe(
          map(transactions => transactions.payedSum),
          tap(payedTransactions => (this.transactions = payedTransactions))
        )
        .subscribe()
    );
  }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }
}
