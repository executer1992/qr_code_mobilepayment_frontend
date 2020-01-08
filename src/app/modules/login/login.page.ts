import { LoaderService } from '../../shared/loader.service';
import { AuthService } from '../../shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay, tap, first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  constructor(private authService: AuthService, private router: Router, private loaderSrv: LoaderService) {}

  ngOnInit() {}

  login(form) {
    this.loaderSrv.loadingPresent();
    this.authService
      .login(form.value)
      .pipe(
        first(),
        tap(_ => {
          this.router.navigateByUrl('menu/home');
          this.loaderSrv.loadingDismiss();
        })
      )
      .subscribe();
  }
}
