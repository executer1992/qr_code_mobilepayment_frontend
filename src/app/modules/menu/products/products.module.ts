import { AddProductPage } from './../../../data/modals/add-product/add-product-modal.component';
import { NgModule } from '@angular/core';
import { ProductsPageRoutingModule } from './products-routing.module';

import { ProductsPage } from './products.page';
import { SharedModule } from '../../../shared/shared.module';
import { ProductsService } from '../../../data/services/products.service';
import { AddProductModalModule } from '../../../data/modals/add-product/add-product-modal.module';

@NgModule({
  imports: [
    SharedModule,
    ProductsPageRoutingModule,
    AddProductModalModule
  ],
  declarations: [ProductsPage],
  entryComponents: [ProductsPage, AddProductPage],
  providers: [ProductsService]
})
export class ProductsPageModule {}
