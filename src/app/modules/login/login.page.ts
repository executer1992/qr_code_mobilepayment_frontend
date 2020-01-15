import { LoaderService } from '../../shared/loader.service';
import { AuthService } from '../../shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay, tap, first, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  constructor(private authService: AuthService, private router: Router, private loaderSrv: LoaderService) {}

  public login(form): void {
    this.loaderSrv.loadingPresent();
    this.authService
      .login(form.value)
      .pipe(
        first(),
        tap(_ => {
          this.loaderSrv.loadingDismiss().then(res => this.router.navigateByUrl('menu/home'));
        }),
        catchError(error => {
          this.loaderSrv.loadingDismiss();
          return throwError(error);
        })
      )
      .subscribe();
  }

  public goToRegister(): void {
    this.router.navigateByUrl('register');
  }
}
