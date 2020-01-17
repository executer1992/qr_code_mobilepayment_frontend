import { Component, Input, Output, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';
import { distinctUntilChanged, exhaustMap, mapTo, tap } from 'rxjs/operators';
import { fromEvent, Observable, of, Subscription } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.scss']
})
export class AddProductPage {
  @Input() productName: string;
  @Input() productPrice: number;
  @Input() product: Product;
  @Input() title: string;
  @Output('productOperation') productOperation;
  @ViewChild('productOperationBtn', { static: false }) productOperationBtn;
  private subscription: Subscription = new Subscription();
  public productForm: FormGroup = this.formBuilder.group({
    product_name: ['', Validators.required],
    product_price: ['', [Validators.required, Validators.pattern(/^\d{1,6}\.\d{0,2}$/)]]
  });
  constructor(
    private productService: ProductsService,
    private modalController: ModalController,
    private formBuilder: FormBuilder
  ) {}

  public ionViewWillEnter(): void {
    const click$: Observable<any> = fromEvent(this.productOperationBtn.el, 'click');
    this.subscription.add(
      click$
        .pipe(
          mapTo(this.productForm),
          tap(console.log),
          distinctUntilChanged(),
          exhaustMap(() => {
            this.emitProductOperation(this.productForm);
            return of(null);
          })
        )
        .subscribe()
    );
  }

  public ionViewDidEnter(): void {
    if (this.product) {
      console.log(this.productForm.get('product_price'));
      console.log(this.productForm.get('product_name'))
      this.productForm.get('product_name').setValue(this.product.product_name);
      this.productForm.get('product_price').setValue(this.product.product_price);
    }
  }

  public ionViewWillLeave(): void {
    this.subscription.unsubscribe();
  }

  async closeModal() {
    await this.modalController.dismiss(null, 'cancel');
  }

  private emitProductOperation(productForm: FormGroup): void {
    const product: Product = {
      ...this.product,
      product_name: productForm.value.product_name,
      product_price: productForm.value.product_price
    };

    this.productOperation(product);
  }
}
