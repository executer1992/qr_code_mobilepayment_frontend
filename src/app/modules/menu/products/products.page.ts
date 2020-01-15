import { Subscription } from 'rxjs';
import { AddProductModalPage } from './../../../data/modals/add-product-modal/add-product-modal.page';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/data/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss']
})
export class ProductsPage {
  private subscription: Subscription = new Subscription();

  constructor(private productService: ProductsService, private modalController: ModalController) {}

  ionViewDidEnter() {
    this.subscription.add(this.productService.getProducts().subscribe());
  }

  ionViewDidLeave() {
    this.subscription.unsubscribe();
  }

  async openModal(): Promise<void> {
    const modal = await this.modalController.create({
      component: AddProductModalPage
    });
    return await modal.present();
  }
}
