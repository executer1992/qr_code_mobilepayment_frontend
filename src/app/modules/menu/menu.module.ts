import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [SharedModule, MenuPageRoutingModule, TranslateModule],
  declarations: [MenuPage]
})
export class MenuPageModule {}
