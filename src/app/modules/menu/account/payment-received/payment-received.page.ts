import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { TransactionService } from '../../../../data/services/transaction.service';

@Component({
  selector: 'app-payment-received',
  templateUrl: './payment-received.page.html',
  styleUrls: ['./payment-received.page.scss'],
})
export class PaymentReceivedPage implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();
  public transaction: Observable<any>;

  constructor(private transactionService: TransactionService) {}


  ngOnInit() {
    this.transactionService.getTransactionHistory();
    this.subscription.add(this.transactionService.transactionHistory$.subscribe(transaction => this.transaction = transaction))
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
