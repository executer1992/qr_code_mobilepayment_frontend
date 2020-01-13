import { SharedModule } from '../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [SharedModule, HomePageRoutingModule, TranslateModule],
  declarations: [HomePage]
})
export class HomePageModule {}
