import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';
import { catchError, tap } from 'rxjs/operators';
import { ToastColor, ToastService } from '../../../shared/toast.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.scss']
})
export class AddProductPage {
  constructor(private productService: ProductsService, private modalController: ModalController, public toastService: ToastService) {}

  async closeModal() {
    await this.modalController.dismiss(null, 'cancel');
  }

  public addProduct(productForm): void {
    const product: Product = productForm.value;

    this.productService
      .addProduct(product)
      .pipe(
        tap(_ => {
          this.toastService.presentToast('Product has been added!', ToastColor.SUCCESS).then(_ => this.closeModal());
        }),
        catchError(error => this.toastService.presentToast(error.message || 'Internal Server Error', ToastColor.WARNING))
      )
      .subscribe();
  }
}
