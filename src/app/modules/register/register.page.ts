import { first, tap } from 'rxjs/operators';
import { User } from './../../data/models/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../data/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {
  constructor(private userService: UsersService, private router: Router) {}

  ngOnInit() {}

  register(form) {
    const user: User = form.value;
    this.userService
      .register(user)
      .pipe(
        first(),
        tap(_ => this.router.navigateByUrl('menu/home'))
      )
      .subscribe();
  }

  goToLogin() {
    this.router.navigateByUrl('login');
  }
}
