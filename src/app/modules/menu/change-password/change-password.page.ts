import {Component, OnInit }from '@angular/core'; 
import {UsersService }from '../../../data/services/users.service'; 

@Component( {
  selector:'app-change-password', 
  templateUrl:'./change-password.page.html', 
  styleUrls:['./change-password.page.scss']
})
export class ChangePasswordPage {
  constructor(private userService:UsersService) {}


  changePassword(form) {
    const password = form.value.new_password; 
    const confirmPass = form.value.confirm_password; 
    console.log(password); 
    console.log(confirmPass); 
    console.log(form.value); 
    if (password === confirmPass) {
      this.userService.changePassword(password).subscribe(); 
    }
  }
}
