import { TransactionHistoryService } from './../../../data/services/transaction-history.service';
import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { AccountPageRoutingModule } from './account-routing.module';

import { AccountPage } from './account.page';
import { ConnectCardComponent } from './connect-card/connect-card.component';
import { CardService } from '../../../data/services/card.service';

@NgModule({
  imports: [SharedModule, AccountPageRoutingModule],
  exports: [ConnectCardComponent],
  declarations: [AccountPage, ConnectCardComponent],
  providers: [CardService, TransactionHistoryService]
})
export class AccountPageModule {}
