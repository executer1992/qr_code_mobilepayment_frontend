import { LoaderService } from '../../shared/header/loader.service';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../data/services/users.service';
import { ToastService, ToastColor } from 'src/app/shared/toast.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage {
  constructor(
    private userService: UsersService,
    private loaderSrv: LoaderService,
    private router: Router,
    private toastService: ToastService
  ) {}

  register(form) {
    this.loaderSrv.loadingPresent();
    this.userService
      .register(form.value)
      .pipe(
        tap(_ => {
          this.loaderSrv.loadingDismiss().then(res => this.router.navigateByUrl('menu/home'));
        }),
        catchError(error => {
          this.loaderSrv.loadingDismiss().then(res => this.toastService.presentToast(error.error.message, ToastColor.WARNING));
          return throwError(error);
        })
      )
      .subscribe();
  }

  goToLogin() {
    this.router.navigateByUrl('login');
  }
}
