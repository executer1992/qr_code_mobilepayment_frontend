import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { User } from './../../../../data/models/user';
import { Component, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../../../../data/models/product';
import { ProductsService } from '../../../../data/services/products.service';
import { tap } from 'rxjs/operators';
import { Storage } from '@ionic/storage';

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
  public transactionPriceForm: FormGroup = this.formBuilder.group({
    transaction_price: ['', [Validators.required, Validators.pattern(/^\d{1,6}\.\d{0,2}$/)]]
  });

  constructor(
    private productService: ProductsService,
    private storage: Storage,
    public modalController: ModalController,
    private formBuilder: FormBuilder
  ) {}

  public ionViewWillEnter(): void {
    this.subscription.add(
      this.productService
        .getProducts()
        .pipe(tap(products => (this.products = products)))
        .subscribe()
    );
  }

  public ionViewWillLeave(): void {
    this.selectedProducts = [];
    this.subscription.unsubscribe();
  }

  async createProductsCode(): Promise<void> {
    const user: User = await this.storage.get('AUTH_USER');
    const transaction_price: string = this.selectedProducts
      .map(el => Number(el.product_price))
      .reduce((a, b) => a + b)
      .toString();
    const products: Product[] = [...this.selectedProducts];
    this.createdCode = JSON.stringify({ user, transaction_price, products });
  }

  async createPriceCode(): Promise<void> {
    const user: User = await this.storage.get('AUTH_USER');
    const transaction_price: string = this.transactionPriceForm.value.transaction_price;
    this.createdCode = JSON.stringify({ user, transaction_price });
  }
}
