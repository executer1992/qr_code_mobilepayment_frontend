import { AuthService } from './../../shared/auth.service';
import { Component} from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss']
})
export class MenuPage {
  public selectedPath: string = '';
  public pages = [
    {
      tittle: 'Home',
      url: '/menu/home'
    },
    {
      tittle: 'Account',
      url: '/menu/account'
    }
  ];
  constructor(private router: Router, private authService: AuthService) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }

  public logout() {
    this.authService.logout();
    this.router.navigateByUrl('login');
  }
}
