import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './headerInterceptor';
import { TokenInterceptor } from './tokenInterceptor';
import { ApiService }from './api.service';
import { baseURL } from 'src/environments/config';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  exports: [],
  declarations: [],
  providers: [
    ApiService,
    { provide: 'baseURL', useValue: baseURL },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {}
