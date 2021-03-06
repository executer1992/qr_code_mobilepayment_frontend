import { Component } from '@angular/core';
import { ProductsService } from '../../../data/services/products.service';
import { ModalController } from '@ionic/angular';
import { ProductModal } from '../../../data/modals/product-modal/product-modal.component';
import { Observable, Subscription, throwError } from 'rxjs';
import { Product } from '../../../data/models/product';
import { catchError, tap } from 'rxjs/operators';
import { ToastColor, ToastService } from '../../../shared/toast.service';
import { LoaderService } from '../../../shared/header/loader.service';
import { handleModalOperations } from '../../../shared/helpers/pipeOperators';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss']
})
export class ProductsPage {
  private subscription: Subscription = new Subscription();

  constructor(
    public productService: ProductsService,
    public modalController: ModalController,
    private toastService: ToastService,
    private loaderService: LoaderService
  ) {}

  ionViewWillEnter() {
    this.subscription.add(this.productService.getProducts().subscribe());
  }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }

  async openAddProductModal() {
    const modal = await this.modalController.create({
      component: ProductModal,
      componentProps: {
        productName: '',
        productPrice: '',
        productOperation: this.addProduct.bind(this),
        title: 'myApp.addProduct'
      }
    });
    return await modal.present();
  }

  async openEditProductModal(product: Product) {
    const modal = await this.modalController.create({
      component: ProductModal,
      componentProps: {
        product,
        productName: product.product_name,
        productPrice: product.product_price,
        productOperation: this.editProduct.bind(this),
        title: 'myApp.editProduct'
      }
    });
    return await modal.present();
  }

  private addProduct(product: Product): void {
    this.loaderService.loadingPresent();
    this.productService
      .addProduct(product)
      .pipe(handleModalOperations(this.loaderService, this.modalController, this.toastService, 'Product has been added!'))
      .subscribe();
  }

  public editProduct(product: Product) {
    this.loaderService.loadingPresent();
    this.productService
      .editProduct(product)
      .pipe(handleModalOperations(this.loaderService, this.modalController, this.toastService, 'Product successfully editted!'))
      .subscribe();
  }

  public removeProduct(product: Product) {
    this.loaderService.loadingPresent();
    this.productService
      .removeProduct(product)
      .pipe(handleModalOperations(this.loaderService, this.modalController, this.toastService, 'Product succesfully removed!'))
      .subscribe();
  }
}
