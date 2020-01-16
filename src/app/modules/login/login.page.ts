import { LoaderService } from '../../shared/header/loader.service';
import { AuthService } from '../../core/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { delay, tap, first, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ToastService, ToastColor } from 'src/app/shared/toast.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  constructor(
    private authService: AuthService,
    private router: Router,
    private loaderSrv: LoaderService,
    private toastService: ToastService
  ) {}

  public login(form): void {
    this.loaderSrv.loadingPresent();
    this.authService
      .login(form.value)
      .pipe(
        first(),
        delay(500),
        tap(_ => {
          this.loaderSrv.loadingDismiss().then(res => this.router.navigateByUrl('menu/home'));
        }),
        catchError(error => {
          this.loaderSrv.loadingDismiss().then(response => this.toastService.presentToast('Wrong credentials', ToastColor.DANGER));
          return throwError(error);
        })
      )
      .subscribe();
  }
}
