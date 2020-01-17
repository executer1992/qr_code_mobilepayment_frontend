import { catchError } from 'rxjs/operators';
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthResponse } from '../data/models/auth-response';

@Injectable()
export class ApiService {
  constructor(@Inject('baseURL') private baseURL: string, private http: HttpClient) {}

  get(url: string): Observable<any> {
    return this.http.get<any>(this.baseURL + url).pipe(this.catchError());
  }

  post(url: string, data): Observable<any> {
    return this.http.post<any>(this.baseURL + url, data).pipe(this.catchError());
  }

  patch(url: string, data): Observable<any> {
    return this.http.patch<any>(this.baseURL + url, data).pipe(this.catchError());
  }

  put(url: string, data): Observable<any> {
    return this.http.put<any>(this.baseURL + url, data).pipe(this.catchError());
  }

  delete(url:string) {
    return this.http.delete<any>(this.baseURL + url).pipe(this.catchError());
  }

  private catchError() {
    return (src: Observable<any>) =>
      src.pipe(
        catchError(error => {
          return throwError(error);
        })
      );
  }
}
