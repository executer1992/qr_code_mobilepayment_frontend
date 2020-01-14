import { AuthService } from '../../shared/auth.service';
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
    this.userService.register(form.value).subscribe(res => {
      this.router.navigateByUrl('menu/home');
    });
  }

  goToLogin() {
    this.router.navigateByUrl('login');
  }
}
