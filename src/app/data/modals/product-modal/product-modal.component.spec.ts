import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductModal } from './product-modal.component';

describe('ProductModal', () => {
  let component: ProductModal;
  let fixture: ComponentFixture<ProductModal>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductModal ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
