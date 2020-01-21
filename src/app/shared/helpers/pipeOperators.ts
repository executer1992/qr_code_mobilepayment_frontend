import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ToastColor, ToastService } from '../toast.service';
import { LoaderService } from '../header/loader.service';
import { ModalController } from '@ionic/angular';

export const handleModalOperations = (
  loaderService: LoaderService,
  modalController: ModalController,
  toastService: ToastService,
  toastSuccessMessage: string
) => {
  return (src: Observable<DocumentWithActivities>) =>
    src.pipe(
      tap(async () => {
        await loaderService.loadingDismiss();
        await modalController.dismiss(null, 'cancel');
        await toastService.presentToast(toastSuccessMessage, ToastColor.SUCCESS);
      }),
      catchError(async error => {
        await loaderService.loadingDismiss();
        await modalController.dismiss(null, 'cancel');
        await toastService.presentToast(error.errror, ToastColor.DANGER);
        return throwError(error);
      })
    );
};
