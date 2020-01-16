import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { tap} from 'rxjs/operators';
import { Observable, BehaviorSubject, of } from 'rxjs';

import { Storage } from '@ionic/storage';
import { User } from '../data/models/user';
import { AuthResponse } from '../data/models/auth-response';
import { ApiService } from '../core/api.service';

@Injectable()
export class AuthService {
  private authenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private apiService: ApiService, private storage: Storage, private platform: Platform) {
    this.platform.ready().then(() => {
      this.ifLoggedIn();
    });
  }

  public ifLoggedIn(): void {
    this.storage.get('ACCESS_TOKEN').then(response => {
      if (response) {
        this.authenticated.next(true);
      }
    });
  }

  public login(user: User): Observable<AuthResponse> {
    return this.apiService.post('login', user).pipe(
      tap(async (res: AuthResponse) => {
        if (res) {
          await this.storage.set('ACCESS_TOKEN', res.access_token).then(_ => this.authenticated.next(true));
          await this.storage.set('EXPIRES_IN', res.expires_in);
        }
      })
    );
  }

  async logout() {
    await this.storage.remove('ACCESS_TOKEN').then(_ => this.authenticated.next(false));
    await this.storage.remove('EXPIRES_IN');
  }

  public getAuthentication(): boolean {
    return this.authenticated.getValue();
  }
}
