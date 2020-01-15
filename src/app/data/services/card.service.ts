import { Injectable } from '@angular/core';
import { ApiService } from '../../core/api.service';
import { catchError, first, tap, take } from 'rxjs/operators';
import { AuthResponse } from '../models/auth-response';
import { Storage } from '@ionic/storage';
import { BehaviorSubject, throwError, Observable } from 'rxjs';

@Injectable()
export class CardService {
  private cardRoute: string = 'cards';
  private cardConnected: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public readonly cardConnected$: Observable<boolean> = this.cardConnected.asObservable();

  constructor(private apiService: ApiService, private storage: Storage) {}

  public verifyCard() {
    return this.apiService.get(this.cardRoute).pipe(
      first(),
      tap(_ => this.cardConnected.next(true)),
      catchError(error => {
        this.cardConnected.next(false);
        return throwError(error || 'Server error');
      })
    );
  }

  public connect(data) {
    return this.apiService.post(this.cardRoute, data).pipe(
      first(),
      tap(_ => this.cardConnected.next(true)),
      catchError(error => {
        this.cardConnected.next(false);
        return throwError(error || 'Server error');
      })
    );
  }
}
