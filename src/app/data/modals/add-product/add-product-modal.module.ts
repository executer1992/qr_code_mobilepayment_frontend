import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { AddProductPage } from './add-product-modal.component';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [AddProductPage],
  imports: [SharedModule, TranslateModule],
  entryComponents: [AddProductPage],
  exports: [AddProductPage]
})
export class AddProductModalModule {}
