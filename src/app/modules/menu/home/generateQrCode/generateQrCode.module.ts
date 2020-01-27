import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './../../../../core/auth.service';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { NgModule } from '@angular/core';
import { GenerateQrCodePageRoutingModule } from './generateQrCode-routing.module';

import { GenerateQrCodePage } from './generateQrCode.page';
import { SharedModule } from '../../../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { ProductsService } from '../../../../data/services/products.service';

@NgModule({
  imports: [SharedModule, GenerateQrCodePageRoutingModule, NgxQRCodeModule, TranslateModule, ReactiveFormsModule],
  declarations: [GenerateQrCodePage],
  entryComponents: [GenerateQrCodePage],
  providers: [ProductsService, AuthService]
})
export class GenerateQrCodePageModule {}
