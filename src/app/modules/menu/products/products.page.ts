import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../data/services/products.service';
import { ModalController } from '@ionic/angular';
import { AddProductPage } from '../../../data/modals/add-product/add-product-modal.component';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../../../data/models/product';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss']
})
export class ProductsPage {
  private subscription: Subscription = new Subscription();
  public products: Product[] = [];
  constructor(public productService: ProductsService, public modalController: ModalController) {}

  ionViewWillEnter() {
    this.subscription.add(
      this.productService
        .getProducts()
        .pipe(tap(products => (this.products = products)))
        .subscribe()
    );
  }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: AddProductPage
    });
    return await modal.present();
  }
}
