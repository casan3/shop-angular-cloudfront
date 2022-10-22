import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { CartCountControlsModule } from '../../core/cart-count-controls/cart-count-controls.module';

import { ProductItemCheckoutComponent } from './product-item-checkout.component';

describe('CartProductItemComponent', () => {
  let component: ProductItemCheckoutComponent;
  let fixture: ComponentFixture<ProductItemCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCardModule, CartCountControlsModule],
      declarations: [ProductItemCheckoutComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemCheckoutComponent);
    component = fixture.componentInstance;
    component.product = {
      title: '',
      orderedCount: 0,
      totalPrice: 0,
      count: 0,
      description: '',
      id: '',
      price: 0,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
