import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, UntypedFormBuilder } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartCountControlsModule } from '../core/cart-count-controls/cart-count-controls.module';
import { CONFIG_TOKEN } from '../core/injection-tokens/config.token';
import { CartShippingFormComponent } from './cart-shipping-form/cart-shipping-form.component';

import { CartComponent } from './cart.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatStepperModule,
        BrowserAnimationsModule,
        CartCountControlsModule,
        ReactiveFormsModule,
      ],
      providers: [
        UntypedFormBuilder,
        {
          provide: CONFIG_TOKEN,
          useValue: jasmine.createSpyObj('environment', ['']),
        },
        {
          provide: HttpClient,
          useValue: jasmine.createSpyObj('HttpClient', ['']),
        },
      ],
      declarations: [
        CartShippingFormComponent,
        CartComponent,
        OrderSummaryComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
