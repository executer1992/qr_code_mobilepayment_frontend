import { Component } from '@angular/core';
import { CardService } from '../../../data/services/card.service';
import { Subscription } from 'rxjs';

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
    this.subscription.add(this.cardService.verifyCard().subscribe(connected => this.cardConnected = connected));
  }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }

  connectCard(creditCard) {
    this.subscription.add(this.cardService.connect(creditCard).subscribe());
  }
}
