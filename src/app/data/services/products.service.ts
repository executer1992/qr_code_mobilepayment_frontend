import { ApiService } from './../../core/api.service';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { BehaviorSubject, EMPTY, Observable, of } from 'rxjs';
import { distinctUntilChanged, first, tap } from 'rxjs/operators';

@Injectable()
export class ProductsService {
  private products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(null);
  public readonly products$: Observable<Product[]> = this.products.asObservable();

  private endpoint: string = 'products';

  constructor(private apiService: ApiService) {}

  public getProduct(productId: string) {
    return this.apiService
      .get(this.endpoint + `/${productId}`)
      .pipe(
        first(),
        tap(product => this.products.next(product))
      )
      .subscribe();
  }

  public getProducts() {
    if (this.products.getValue() === null ) {
      return this.apiService.get(this.endpoint).pipe(
        first(),
        tap(products => this.products.next(products))
      );
    }
    return this.products;
  }

  public addProduct(product: Product) {
    return this.apiService.post(this.endpoint, product).pipe(
      distinctUntilChanged(),
      first(),
      tap(addedProduct => this.addProductToSubj(addedProduct))
    );
  }

  public editProduct(product: Product) {
    return this.apiService
      .patch(this.endpoint + `/${product.product_id}`, product)
      .pipe(
        first(),
        tap(_ => this.editProductInSubj(product))
      );
  }

  public removeProduct(productId: string) {
    return this.apiService.delete(this.endpoint + `/${productId}`).pipe(
      first(),
      tap(_ => this.removeProductFromSubj(productId))
    );
  }

  private addProductToSubj(product: Product) {
    const currentProducts: Product[] = this.products.getValue();
    const updatedProducts: Product[] = currentProducts !== null ? [...currentProducts, product] : [product];
    this.products.next(updatedProducts);
  }

  private editProductInSubj(editProduct: Product) {
    const currentProducts: Product[] = this.products.getValue();
    const index = currentProducts.findIndex((product: Product) => product.product_id === editProduct.product_id);
    const newProducts: Product[] = currentProducts.map((key, i) => (i === index ? (key = editProduct) : key));
    this.products.next(newProducts);
  }

  private removeProductFromSubj(productId: string) {
    const currentProducts: Product[] = this.products.getValue();
    const newProducts: Product[] = currentProducts.filter((product, index) => product.product_id !== productId);
    this.products.next(newProducts);
  }
}
