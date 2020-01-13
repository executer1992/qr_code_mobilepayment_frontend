import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../data/services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  changePassword(form) {

    // this.userService.changePassword(form.password);
  }
}
