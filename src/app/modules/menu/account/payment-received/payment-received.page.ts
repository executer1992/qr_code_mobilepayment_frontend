import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TransactionService } from '../../../../data/services/transaction.service';

@Component({
  selector: 'app-payment-received',
  templateUrl: './payment-received.page.html',
  styleUrls: ['./payment-received.page.scss']
})
export class PaymentReceivedPage implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();

  constructor(private transactionService: TransactionService) {}


  ionViewWillEnter() {
    this.subscription.add(this.transactionService.getTransactionHistory().subscribe());
  }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }
}
