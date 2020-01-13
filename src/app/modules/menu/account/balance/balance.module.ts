import { NgModule } from '@angular/core';
import { BalancePageRoutingModule } from './balance-routing.module';

import { BalancePage } from './balance.page';
import { SharedModule } from '../../../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [SharedModule, BalancePageRoutingModule, TranslateModule],
  declarations: [BalancePage]
})
export class BalancePageModule {}
