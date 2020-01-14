import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../data/services/users.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {

  constructor(private userService: UsersService) { }

  ngOnInit() {
  }

  changePassword(form) {

    // this.userService.changePassword(form.password);
  }
}
