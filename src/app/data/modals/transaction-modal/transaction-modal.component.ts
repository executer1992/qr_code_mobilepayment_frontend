import { TransactionData } from './../../models/transactions';
import { User } from './../../models/user';
import { mapTo, distinctUntilChanged, exhaustMap } from 'rxjs/operators';
import { Subscription, Observable, of, fromEvent } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Input, ViewChild, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-transaction-modal',
  templateUrl: './transaction-modal.component.html',
  styleUrls: ['./transaction-modal.component.scss']
})
export class TransactionModalComponent {
  @Input() producuts: Product[];
  @Input() client: User;
  @Input() transactionPrice: string;
  @Input() title: string;
  @Output('transactionOperation') transactionOperation;
  @ViewChild('transactionOperationBtn', { static: false }) transactionOperationBtn;
  public transactionForm: FormGroup = this.formBuilder.group({
    transaction_client: ['', Validators.required],
    transaction_price: ['', Validators.required]
  });
  private subscription: Subscription = new Subscription();

  constructor(private modalController: ModalController, private formBuilder: FormBuilder) {}

  public ionViewWillEnter(): void {
    const click$: Observable<any> = fromEvent(this.transactionOperationBtn.el, 'click');
    this.subscription.add(
      click$
        .pipe(
          distinctUntilChanged(),
          exhaustMap(() => {
            this.emitTransactionOperation();
            return of(null);
          })
        )
        .subscribe()
    );
  }

  public ionViewDidEnter(): void {
    if (this.client) {
      this.transactionForm.get('transaction_client').setValue(this.client.name);
      this.transactionForm.get('transaction_price').setValue(this.transactionPrice);
    }
  }

  public ionViewWillLeave(): void {
    this.subscription.unsubscribe();
  }

  async closeModal() {
    await this.modalController.dismiss(null, 'cancel');
  }

  private emitTransactionOperation(): void {
    const transactionData: TransactionData = {
      sender_id: this.client.id,
      transaction_amount: this.transactionPrice
    };
    this.transactionOperation(transactionData);
  }
}
