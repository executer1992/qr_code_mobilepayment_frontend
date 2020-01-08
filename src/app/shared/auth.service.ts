import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

import { Storage } from '@ionic/storage';
import { User } from '../data/models/user';
import { AuthResponse } from '../data/models/auth-response';

@Injectable()
export class AuthService {
  private AUTH_SERVER_ADDRESS: string = 'https://qrcode-mobilepayment.herokuapp.com';
  private authenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient, private storage: Storage, private platform: Platform) {
    this.platform.ready().then(async () => {
      const accesstoken = this.storage.get('ACCES_TOKEN');
      return await this.authenticated.next(accesstoken ? true : false);
    });
  }

  register(user: User): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(`${this.AUTH_SERVER_ADDRESS}/register`, user).pipe(
      tap(async (res: AuthResponse) => {
        if (res) {
          await this.storage.set('ACCESS_TOKEN', res.access_token);
          await this.storage.set('EXPIRES_IN', res.expires_in);
          this.authenticated.next(true);
        }
      })
    );
  }

  login(user: User): Observable<AuthResponse> {
    return this.httpClient.post(`${this.AUTH_SERVER_ADDRESS}/login`, user).pipe(
      tap(async (res: AuthResponse) => {
        if (res) {
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
}
