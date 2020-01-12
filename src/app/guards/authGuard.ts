import { Observable } from 'rxjs';
import { AuthService } from '../shared/auth.service';
import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { delay, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private isloggedIn: Observable<boolean>;

  constructor(private authService: AuthService, private router: Router) {
    this.isloggedIn = this.authService.getAuthentication();
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.isloggedIn
      .pipe(
        first(),
        tap(logged => {
          if (!logged) {
            this.router.navigate(['login']);
          }
        })
      )
      .subscribe();

    return this.isloggedIn;
  }

  public getGuardAuthentication(): Observable<boolean> {
    return this.isloggedIn;
  }
}
