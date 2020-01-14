import { ApiService } from './../../core/api.service';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class TransactionService {
  private endpoint: string = 'transactions';
  private transactionHistory: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public readonly transactionHistory$: Observable<any> = this.transactionHistory.asObservable();

  constructor(private apiService: ApiService) {}

  public getTransactionHistory() {
    return this.apiService.get(this.endpoint).pipe(
      first(),
      tap(response => this.transactionHistory.next(response))
    ).subscribe();
  }
}
