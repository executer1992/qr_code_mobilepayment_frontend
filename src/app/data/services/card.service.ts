import { Injectable } from '@angular/core';
import { ApiService } from '../../core/api.service';
import { catchError, tap, mapTo } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { BehaviorSubject, throwError, Observable } from 'rxjs';

@Injectable()
export class CardService {
  private cardRoute: string = 'cards';
  private cardConnected: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  public readonly cardConnected$: Observable<boolean> = this.cardConnected.asObservable();

  constructor(private apiService: ApiService, private storage: Storage) {}

  public verifyCard(): Observable<boolean> {
    if (this.cardConnected.getValue() !== null) {
      return this.cardConnected$;
    }
    return this.apiService
      .get(this.cardRoute)
      .pipe(
        tap(_ => this.cardConnected.next(true)),
        mapTo(true),
        catchError(error => {
          this.cardConnected.next(false);
          return throwError(error || 'Server error');
        })
      );
  }

  public connect(data): Observable<any> {
    return this.apiService
      .post(this.cardRoute, data)
      .pipe(
        tap(_ => this.cardConnected.next(true)),
        catchError(error => {
          this.cardConnected.next(false);
          return throwError(error || 'Server error');
        })
      );
  }
}
