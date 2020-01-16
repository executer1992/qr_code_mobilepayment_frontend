import {NgModule} from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { AddProductPage } from './add-product-modal.component';
import { TranslateModule } from '@ngx-translate/core';
import { ToastService } from '../../services/toast.service';
@NgModule({
  declarations: [
    AddProductPage
  ],
  imports: [
    SharedModule,
    TranslateModule
  ],
  entryComponents: [
    AddProductPage
  ],
  providers: [ToastService]
})
export class AddProductModalModule {}
