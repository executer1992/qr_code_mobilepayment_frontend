import { NgModule } from '@angular/core';
import { ChangePasswordPageRoutingModule } from './change-password-routing.module';
import { ChangePasswordPage } from './change-password.page';
import { SharedModule } from '../../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { UsersService } from '../../../data/services/users.service';

@NgModule({
  imports: [SharedModule, ChangePasswordPageRoutingModule, TranslateModule],
  declarations: [ChangePasswordPage],
  providers: [UsersService]
})
export class ChangePasswordPageModule {}
