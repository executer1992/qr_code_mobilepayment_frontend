import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaymentReceivedPage } from './payment-received.page';

describe('PaymentReceivedPage', () => {
  let component: PaymentReceivedPage;
  let fixture: ComponentFixture<PaymentReceivedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentReceivedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentReceivedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
