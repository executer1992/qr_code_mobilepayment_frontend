import { Observable} from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Storage } from '@ionic/storage';

import { fromPromise } from 'rxjs/internal-compatibility';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor(private storage: Storage) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
      request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
      return next.handle(request);
  }
}
