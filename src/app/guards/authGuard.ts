import { Observable } from 'rxjs';
import { AuthService } from '../shared/auth.service';
import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { delay, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private isloggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.getAuthentication().subscribe( (isLogged: boolean) => {
      this.isloggedIn = isLogged;
      if (this.isloggedIn) {
        this.router.navigate(['/']);
      } else {
        this.router.navigate(['logout']);
      }
    })
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.isloggedIn) {
      return this.router.navigate(['login']);
    }

    return this.isloggedIn;
  }

  public getGuardAuthentication(): boolean {
    return this.isloggedIn;
  }
}
