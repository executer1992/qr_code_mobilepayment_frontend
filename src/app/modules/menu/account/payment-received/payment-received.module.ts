import { NgModule } from '@angular/core';
import { PaymentReceivedPageRoutingModule } from './payment-received-routing.module';

import { PaymentReceivedPage } from './payment-received.page';
import { SharedModule } from '../../../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [SharedModule, PaymentReceivedPageRoutingModule, TranslateModule],
  declarations: [PaymentReceivedPage]
})
export class PaymentReceivedPageModule {}
