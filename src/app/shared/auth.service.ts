import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, switchMap } from 'rxjs/operators';
import { Observable, BehaviorSubject, of } from 'rxjs';

import { Storage } from '@ionic/storage';
import { User } from '../data/models/user';
import { AuthResponse } from '../data/models/auth-response';
import { ApiService } from '../core/api.service';
import { fromPromise } from 'rxjs/internal-compatibility';

@Injectable()
export class AuthService {
  private apiEndpoint: string = 'users';
  private authenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _jwtToken: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  constructor(private apiService: ApiService, private storage: Storage, private platform: Platform) {
    this.platform.ready().then(async () => {
      fromPromise(this.storage.get('ACCESS_TOKEN')).pipe(
        switchMap(token => {
          // this.authenticated.next(false);
          if (token) {
            this._jwtToken.next(token);
            this.authenticated.next(true);
          }
          return of(false);
        })
      );
    });
  }

  register(user: User): Observable<AuthResponse> {
    return this.apiService.post(this.apiEndpoint, user).pipe(
      tap(async (res: AuthResponse) => {
        if (res) {
          this.authenticated.next(true);
          this._jwtToken.next(res.access_token);
          await this.storage.set('ACCESS_TOKEN', res.access_token);
          await this.storage.set('EXPIRES_IN', res.expires_in);
        }
      })
    );
  }

  login(user: User): Observable<AuthResponse> {
    return this.apiService.post('login', user).pipe(
      tap(async (res: AuthResponse) => {
        if (res) {
          this.authenticated.next(true);
          console.log(this.authenticated.getValue());
          this._jwtToken.next(res.access_token);
          await this.storage.set('ACCESS_TOKEN', res.access_token);
          await this.storage.set('EXPIRES_IN', res.expires_in);
        }
      })
    );
  }
  async logout() {
    this.authenticated.next(false);
    await this.storage.remove('ACCESS_TOKEN');
    await this.storage.remove('EXPIRES_IN');
  }

  public getAuthentication(): Observable<boolean> {
    return this.authenticated.asObservable();
  }

  public getJwtToken() {
    return this._jwtToken.asObservable();
  }
}
