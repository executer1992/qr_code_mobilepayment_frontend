import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../../../../data/models/product';
import { ProductsService } from '../../../../data/services/products.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-generate-qr-code',
  templateUrl: './generateQrCode.page.html',
  styleUrls: ['./generateQrCode.page.scss']
})
export class GenerateQrCodePage {
  public qrData = null;
  public createdCode = null;
  public products: Product[] = [];
  public selectedProducts: Product[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private productService: ProductsService) {}

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

  createCode() {
    this.createdCode = this.selectedProducts;
  }
}
