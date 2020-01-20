import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ProductModal } from './product-modal.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [ProductModal],
  imports: [SharedModule, TranslateModule, ReactiveFormsModule],
  entryComponents: [ProductModal],
  exports: [ProductModal]
})
export class ProductModalModule {}
