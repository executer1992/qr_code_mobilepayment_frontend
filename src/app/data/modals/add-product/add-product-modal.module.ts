import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { AddProductPage } from './add-product-modal.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [AddProductPage],
  imports: [SharedModule, TranslateModule, ReactiveFormsModule],
  entryComponents: [AddProductPage],
  exports: [AddProductPage]
})
export class AddProductModalModule {}
