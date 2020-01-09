import { Injectable } from '@angular/core';
import { ApiService } from '../../core/api.service';
import { catchError, tap } from 'rxjs/operators';
import { AuthResponse } from '../models/auth-response';
import { Storage } from '@ionic/storage';
import { BehaviorSubject, throwError } from 'rxjs';

@Injectable()
export class CardService {
  private cardConnected: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private apiService: ApiService, private storage: Storage) {}

  public verifyCard() {
    this.apiService.get('card').pipe(
      tap(_ => this.cardConnected.next(true)),
      catchError( (error) => {
        this.cardConnected.next(false);
        return throwError(error || 'Server error');
      })
    )
  }

  public connect(data) {
    return this.apiService.post('card/connect', data).pipe(
      tap(async (res: AuthResponse) => {
        if (res) {
          await this.storage.set('TRANSACTION_TOKEN', res.access_token);
          await this.storage.set('EXPIRES_IN', res.expires_in);
          this.cardConnected.next(true);
        }
      })
    );
  }

  public getCardConnection() {
    return this.cardConnected.asObservable();
  }
}
