import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { tap, switchMap } from 'rxjs/operators';
import { Observable, BehaviorSubject, of } from 'rxjs';

import { Storage } from '@ionic/storage';
import { User } from '../data/models/user';
import { AuthResponse } from '../data/models/auth-response';
import { ApiService } from '../core/api.service';
import { fromPromise } from 'rxjs/internal-compatibility';

@Injectable()
export class AuthService {
  private authenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private apiService: ApiService, private storage: Storage, private platform: Platform) {
    this.platform.ready().then(async () => {
      fromPromise(this.storage.get('ACCESS_TOKEN')).pipe(
        switchMap(token => {
          if (token) {
            this.authenticated.next(true);
          } else {
            this.authenticated.next(true);
          }
          return of(false);
        })
      );
    });
  }

  login(user: User): Observable<AuthResponse> {
    return this.apiService.post('login', user).pipe(
      tap(async (res: AuthResponse) => {
        if (res) {
          this.authenticated.next(true);
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
}
