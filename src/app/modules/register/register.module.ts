import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import { TranslateModule } from '@ngx-translate/core';
import { UsersService } from '../../data/services/users.service';

@NgModule({
  imports: [SharedModule, RegisterPageRoutingModule, TranslateModule],
  declarations: [RegisterPage],
  providers: [UsersService]
})
export class RegisterPageModule {}
