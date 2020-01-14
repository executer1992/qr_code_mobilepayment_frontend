import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(private platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar, private translate: TranslateService) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.initializeTranslate();
    });
  }

  initializeTranslate() {
    this.translate.addLangs(['en', 'pl']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
