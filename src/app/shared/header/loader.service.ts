import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable()
export class LoaderService {
  public isLoading: boolean = false;
  constructor(public loadingController: LoadingController) {}

  async loadingPresent() {
    this.isLoading = true;
    return await this.loadingController
      .create({
        message: 'Please wait ...',
        spinner: 'circles'
      })
      .then(a => {
        a.present().then(() => {
          if (!this.isLoading) {
            a.dismiss().then(() => console.log('abort laoding'));
          }
        });
      });
  }

  async loadingDismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('loading dismissed'));
  }
}
