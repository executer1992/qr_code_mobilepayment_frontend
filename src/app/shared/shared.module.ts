import { AuthService } from './auth.service';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { LoaderService } from './loader.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicStorageModule } from '@ionic/storage';
import { CoreModule } from '../core/core.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, IonicModule, FormsModule, CoreModule, IonicStorageModule.forRoot(), TranslateModule],
  exports: [CommonModule, IonicModule, FormsModule, CoreModule, HeaderComponent],
  providers: [LoaderService, AuthService]
})
export class SharedModule {}
