import { AddProductModalPageModule } from './../../../data/modals/add-product-modal/add-product-modal.module';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { ProductsPageRoutingModule } from './products-routing.module';
import { ProductsPage } from './products.page';

@NgModule({
  imports: [SharedModule, TranslateModule, AddProductModalPageModule, ProductsPageRoutingModule],
  declarations: [ProductsPage]
})
export class ProductsPageModule {}
