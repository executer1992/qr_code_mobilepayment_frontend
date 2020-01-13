import { NgModule } from '@angular/core';
import { ChangePasswordPageRoutingModule } from './change-password-routing.module';
import { ChangePasswordPage } from './change-password.page';
import { SharedModule } from '../../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [SharedModule, ChangePasswordPageRoutingModule, TranslateModule],
  declarations: [ChangePasswordPage]
})
export class ChangePasswordPageModule {}
