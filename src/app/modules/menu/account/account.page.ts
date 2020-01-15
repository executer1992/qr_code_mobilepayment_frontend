import { TransactionService } from '../../../data/services/transaction.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CardService } from '../../../data/services/card.service';
import { Observable, Subscription } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss']
})
export class AccountPage {
  private subscription: Subscription = new Subscription();
  public cardConnected: boolean = false;

  constructor(private cardService: CardService) {}

  ionViewWillEnter() {
    this.subscription.add(this.cardService.verifyCard().subscribe());
    this.subscription.add(
      this.cardService.cardConnected$
        .pipe(tap(connected => (this.cardConnected = connected)))
        .subscribe()
    );
  }

  connectt(creditCard) {
    this.subscription.add(this.cardService.connect(creditCard).subscribe());
  }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }
}
