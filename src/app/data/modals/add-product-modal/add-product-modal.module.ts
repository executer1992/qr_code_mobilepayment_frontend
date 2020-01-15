import { ProductsService } from './../../services/products.service';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { AddProductModalPage } from './add-product-modal.page';

@NgModule({
  imports: [SharedModule, TranslateModule],
  declarations: [AddProductModalPage],
  entryComponents: [AddProductModalPage],
  exports: [AddProductModalPage],
  providers: [ProductsService]
})
export class AddProductModalPageModule {}
