import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

export enum ToastColor {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
  SUCCESS = 'success',
  WARNING = 'warning',
  DANGER = 'danger',
  LIGHT = 'light',
  MEDIUM = 'medium',
  DARK = 'dark'
};

@Injectable()
export class ToastService {

  constructor(private toastController: ToastController) {}

  async presentToast(text: string, status: ToastColor): Promise<void> {
    const toast = await this.toastController.create({
      message: text,
      duration: 2000,
      position: 'top',
      mode: 'md',
      color: status,
      buttons: [
        {
          text: 'Done',
          role: 'cancel',
        }
      ]
    });
    toast.present();
  }

}
