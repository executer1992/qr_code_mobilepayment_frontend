import { Observable} from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Storage } from '@ionic/storage';

import { fromPromise } from 'rxjs/internal-compatibility';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private storage: Storage) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return fromPromise(this.storage.get('ACCESS_TOKEN')).pipe(
      switchMap(token => {
        if (token) {
          request = request.clone({ headers: request.headers.set('Authorization', `Bearer ${token}`) });
        }
        return next.handle(request);
      })
    );
  }
}
