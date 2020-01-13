import { NgModule } from '@angular/core';
import { PaymentDonePageRoutingModule } from './payment-done-routing.module';

import { PaymentDonePage } from './payment-done.page';
import { SharedModule } from '../../../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [SharedModule, PaymentDonePageRoutingModule, TranslateModule],
  declarations: [PaymentDonePage]
})
export class PaymentDonePageModule {}
