import { tap } from 'rxjs/operators';
import { ProductsService } from './../../services/products.service';
import { ModalController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.page.html',
  styleUrls: ['./add-product-modal.page.scss']
})
export class AddProductModalPage implements OnInit {
  constructor(
    public modalController: ModalController,
    public toastController: ToastController,
    private produtService: ProductsService
  ) {}

  ngOnInit() {}

  closeModal() {
    this.modalController.dismiss();
  }

  public addProduct(formProduct) {
    const product: Product = formProduct.value;
    this.produtService
      .addProduct(product)
      .pipe(
        tap(_ => {
          this.presentToast('Product has ben added!').then(res => this.closeModal());
        })
      )
      .subscribe();
  }

  async presentToast(toastMessage: string) {
    const toast = await this.toastController.create({
      message: toastMessage,
      duration: 1500,
      buttons: [
        {
          text: 'Done',
          role: 'cancel'
        }
      ]
    });
    toast.present();
  }
}
