import { TransactionService } from '../../../data/services/transaction.service';
import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { AccountPageRoutingModule } from './account-routing.module';

import { AccountPage } from './account.page';
import { ConnectCardComponent } from './connect-card/connect-card.component';
import { CardService } from '../../../data/services/card.service';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [SharedModule, AccountPageRoutingModule, TranslateModule],
  exports: [ConnectCardComponent],
  declarations: [AccountPage, ConnectCardComponent],
  providers: [CardService, TransactionService]
})
export class AccountPageModule {}
