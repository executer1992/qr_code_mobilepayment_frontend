import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { TransactionService } from '../../../../data/services/transaction.service';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-payment-received',
  templateUrl: './payment-received.page.html',
  styleUrls: ['./payment-received.page.scss']
})
export class PaymentReceivedPage {
  private subscription: Subscription = new Subscription();
  public transactions: number = 0;

  constructor(private transactionService: TransactionService) {}

  ionViewWillEnter() {
    this.subscription.add(
      this.transactionService
        .getTransactionHistory()
        .pipe(
          map(transactions => transactions.receivedSum),
          tap(recievedTransactions => (this.transactions = recievedTransactions))
        )
        .subscribe()
    );
  }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }
}
