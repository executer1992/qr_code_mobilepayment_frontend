import { TransactionHistoryService } from './../../../data/services/transaction-history.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CardService } from '../../../data/services/card.service';
import { Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss']
})
export class AccountPage implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  public cardConnected: boolean = false;

  ngOnInit(): void {
    this.cardService.verifyCard();
    this.subscription.add(this.cardService.cardConnected$.subscribe(connected => (this.cardConnected = connected)));
    this.transactionService.getTransactionHistory();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  constructor(
    public modalController: ModalController,
    private cardService: CardService,
    private transactionService: TransactionHistoryService
  ) {}

  connectt(creditCard) {
    console.log(creditCard);
    this.cardService.connect(creditCard);
  }
}
