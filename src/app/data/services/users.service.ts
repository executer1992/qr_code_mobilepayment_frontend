import { ApiService } from './../../core/api.service';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { AuthResponse } from '../models/auth-response';

@Injectable()
export class UsersService {
  private endpoint: string = 'users';

  constructor(private apiService: ApiService) {}

  register(user: User): Observable<AuthResponse> {
    return this.apiService.post(this.endpoint, user).pipe();
  }

  changePassword(newPassword: string): Observable<AuthResponse> {
    return this.apiService.patch(this.endpoint, newPassword);
  }
}
