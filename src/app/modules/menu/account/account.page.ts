import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CardService } from '../../../data/services/card.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss']
})
export class AccountPage {
  public cardConnected: Observable<boolean>;

  constructor(public modalController: ModalController, private cardService: CardService) {
    this.cardConnected = this.cardService.getCardConnection();
    this.cardService.verifyCard();
  }

  connect(form) {
    this.cardService.connect(form.value).subscribe(res => {

    });
  }
}
