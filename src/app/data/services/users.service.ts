import { User } from './../models/user';
import { ApiService } from './../../core/api.service';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class UsersService {
  private endpoint: string = 'users';
  private transactionHistory: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public readonly transactionHistory$: Observable<any> = this.transactionHistory.asObservable();

  constructor(private apiService: ApiService) {}

  public register(user: User) {
    return this.apiService.post(this.endpoint, user).pipe(first());
  }

  public changePassword(password: string) {
    return this.apiService.patch(this.endpoint, { password }).pipe(first());
  }
}
