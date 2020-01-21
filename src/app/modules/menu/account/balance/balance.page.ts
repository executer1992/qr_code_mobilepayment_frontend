import { Component } from '@angular/core';
import { TransactionService } from '../../../../data/services/transaction.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.page.html',
  styleUrls: ['./balance.page.scss'],
})
export class BalancePage {

  private subscription: Subscription = new Subscription();

  constructor(private transactionService: TransactionService) {}

  ionViewWillEnter() {
    this.subscription.add(this.transactionService.getTransactionHistory().subscribe());
  }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }

}
