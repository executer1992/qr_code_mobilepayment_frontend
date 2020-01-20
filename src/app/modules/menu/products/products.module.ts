import { ProductModal } from '../../../data/modals/product-modal/product-modal.component';
import { NgModule } from '@angular/core';
import { ProductsPageRoutingModule } from './products-routing.module';

import { ProductsPage } from './products.page';
import { SharedModule } from '../../../shared/shared.module';
import { ProductsService } from '../../../data/services/products.service';
import { ProductModalModule } from '../../../data/modals/product-modal/product-modal.module';

@NgModule({
  imports: [SharedModule, ProductsPageRoutingModule, ProductModalModule],
  declarations: [ProductsPage],
  entryComponents: [ProductsPage, ProductModal],
  providers: [ProductsService]
})
export class ProductsPageModule {}
