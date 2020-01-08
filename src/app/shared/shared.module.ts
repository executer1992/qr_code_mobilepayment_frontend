import { AuthService } from './auth.service';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { LoaderService } from './loader.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, IonicModule, FormsModule, IonicStorageModule.forRoot()],
  exports: [CommonModule, IonicModule, FormsModule, HeaderComponent],
  providers: [LoaderService, AuthService]
})
export class SharedModule {}
