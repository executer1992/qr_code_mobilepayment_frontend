import { TransactionModalComponent } from './transaction-modal.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [TransactionModalComponent],
  imports: [SharedModule, TranslateModule, ReactiveFormsModule],
  entryComponents: [TransactionModalComponent],
  exports: [TransactionModalComponent]
})
export class TransactionModalModule {}
