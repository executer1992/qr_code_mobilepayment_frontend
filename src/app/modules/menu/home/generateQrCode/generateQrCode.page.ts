import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/data/services/products.service';
import { Product } from 'src/app/data/models/product';

@Component({
  selector: 'app-generate-qr-code',
  templateUrl: './generateQrCode.page.html',
  styleUrls: ['./generateQrCode.page.scss']
})
export class GenerateQrCodePage {
  public qrData = null;
  public createdCode = null;
  public selectedProducts: Product[] = [];
  private subscription: Subscription = new Subscription();

  constructor(public productService: ProductsService) {}

  ionViewWillEnter() {
    this.subscription.add(this.productService.getProducts().subscribe());
  }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }

  createCode() {
    this.createdCode = this.selectedProducts;
  }
}
