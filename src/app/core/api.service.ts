import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthResponse } from '../data/models/auth-response';

@Injectable()
export class ApiService {
  constructor(@Inject('baseURL') private baseURL: string, private http: HttpClient) {}

  get(url: string): Observable<any> {
    return this.http.get<any>(this.baseURL + url);
  }

  post(url: string, data): Observable<any> {
    return this.http.post<any>(this.baseURL + url, data);
  }
}
