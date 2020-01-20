import { ToastService } from './../../../../shared/toast.service';
import { LoaderService } from './../../../../shared/header/loader.service';
import { ModalController } from '@ionic/angular';
import { User } from './../../../../data/models/user';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../../../../data/models/product';
import { ProductsService } from '../../../../data/services/products.service';
import { tap } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { TransactionModal } from 'src/app/data/models/transactions';

@Component({
  selector: 'app-generate-qr-code',
  templateUrl: './generateQrCode.page.html',
  styleUrls: ['./generateQrCode.page.scss']
})
export class GenerateQrCodePage {
  public qrData = null;
  public createdCode: string = null;
  public products: Product[] = [];
  public selectedProducts: Product[] = [];
  private subscription: Subscription = new Subscription();

  constructor(
    private productService: ProductsService,
    private storage: Storage,
    public modalController: ModalController,
    private toastService: ToastService,
    private loaderService: LoaderService
  ) {}

  public ionViewWillEnter(): void {
    this.subscription.add(
      this.productService
        .getProducts()
        .pipe(
          tap(console.log),
          tap(products => (this.products = products)))
        .subscribe()
    );
  }

  public ionViewWillLeave(): void {
    this.selectedProducts = [];
    this.subscription.unsubscribe();
  }

  async createCode(): Promise<void> {
    const user: User = await this.storage.get('AUTH_USER');
    const transaction_price: string = this.selectedProducts
      .map(el => Number(el.product_price))
      .reduce((a, b) => a + b)
      .toString();
    const products: Product[] = [...this.selectedProducts];
    this.createdCode = JSON.stringify({ user, transaction_price, products });
  }
}
