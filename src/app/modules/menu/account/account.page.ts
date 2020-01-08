import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss']
})
export class AccountPage {
  constructor(public modalController: ModalController) {}

  async connect() {
    // const modal = await this.modalController.create({
    //   component: ModalPage
    // });
    // return await modal.present();
  }
}
