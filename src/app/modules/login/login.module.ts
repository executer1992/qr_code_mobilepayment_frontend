import { SharedModule } from '../../shared/shared.module';
import { LoaderService } from '../../shared/loader.service';
import { NgModule } from '@angular/core';
import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [SharedModule, LoginPageRoutingModule, TranslateModule],
  declarations: [LoginPage],
  providers: [LoaderService]
})
export class LoginPageModule {}
