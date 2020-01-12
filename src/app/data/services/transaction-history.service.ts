import { ApiService } from './../../core/api.service';
import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';

@Injectable()
export class TransactionHistoryService {
  private endpoint: string = 'transactions';
  constructor(private apiService: ApiService) {}

  public getTransactionHistory() {
    return this.apiService
      .get(this.endpoint)
      .pipe(first())
      .subscribe();
  }
}
