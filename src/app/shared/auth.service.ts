import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

import { Storage } from '@ionic/storage';
import { User } from '../data/models/user';
import { AuthResponse } from '../data/models/auth-response';
import { ApiService } from '../core/api.service';

@Injectable()
export class AuthService {

  private authenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _jwtToken: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  constructor(private apiService: ApiService, private storage: Storage, private platform: Platform) {
    this.platform.ready().then(async () => {
      this.storage.get('ACCESS_TOKEN').then( (token) => {
        this._jwtToken.next(token)
      });
      const accesstoken = this.storage.get('ACCESS_TOKEN');
      return await this.authenticated.next(accesstoken ? true : false);
    });
  }

  register(user: User): Observable<AuthResponse> {
    return this.apiService.post('register', user).pipe(
      tap(async (res: AuthResponse) => {
        if (res) {
          this._jwtToken.next(res.access_token);
          await this.storage.set('ACCESS_TOKEN', res.access_token);
          await this.storage.set('EXPIRES_IN', res.expires_in);
          this.authenticated.next(true);
        }
      })
    );
  }

  login(user: User): Observable<AuthResponse> {
    return this.apiService.post('login', user).pipe(
      tap(async (res: AuthResponse) => {
        if (res) {
          this._jwtToken.next(res.access_token);
          await this.storage.set('ACCESS_TOKEN', res.access_token);
          await this.storage.set('EXPIRES_IN', res.expires_in);
          this.authenticated.next(true);
        }
      })
    );
  }
  async logout() {
    await this.storage.remove('ACCESS_TOKEN');
    await this.storage.remove('EXPIRES_IN');
    this.authenticated.next(false);
  }

  public getAuthentication(): Observable<boolean> {
    return this.authenticated.asObservable();
  }

  public getJwtToken() {
    return this._jwtToken.asObservable();
  }
}
