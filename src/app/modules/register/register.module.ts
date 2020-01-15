import { UsersService } from './../../data/services/users.service';
import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [SharedModule, RegisterPageRoutingModule, TranslateModule],
  declarations: [RegisterPage],
  providers: [UsersService]
})
export class RegisterPageModule {}
