import { Observable, throwError } from 'rxjs';
import { catchError, finalize, switchMap, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { AuthService } from '../shared/auth.service';
import { fromPromise } from 'rxjs/internal-compatibility';


@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor(private storage: Storage, private authService: AuthService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return fromPromise(this.storage.get('ACCESS_TOKEN')).pipe(
      switchMap(token => {
        if (token) {
          request = request.clone({ headers: request.headers.set('Authorization', `Bearer ${token}`) });
        }
        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
        request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        return next.handle(request);
      })
      )

  }

    // request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

}
