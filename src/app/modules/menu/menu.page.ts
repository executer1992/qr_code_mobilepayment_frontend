import { AuthService } from './../../shared/auth.service';
import { Component } from '@angular/core';
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
      tittle: 'myApp.qrPanel',
      url: '/menu/home/generate',
      icon: 'cog'
    },
    {
      tittle: 'myApp.account',
      url: '/menu/account/balance',
      icon: 'contact'
    },
    {
      tittle: 'myApp.changePassword',
      url: '/menu/change-password',
      icon: 'lock'
    },
    {
      tittle: 'myApp.products',
      url: '/menu/products',
      icon: 'basket'
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
