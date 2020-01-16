import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [SharedModule, LoginPageRoutingModule, TranslateModule.forChild()],
  declarations: [LoginPage]
})
export class LoginPageModule {}
