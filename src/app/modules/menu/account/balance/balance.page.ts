import { Component, OnDestroy, OnInit } from '@angular/core';
import { TransactionService } from '../../../../data/services/transaction.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.page.html',
  styleUrls: ['./balance.page.scss'],
})
export class BalancePage implements OnInit, OnDestroy {

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
