import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { CONFIG_TOKEN } from '../core/injection-tokens/config.token';

import { CheckoutService } from './checkout.service';

describe('CheckoutService', () => {
  let service: CheckoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: CONFIG_TOKEN,
          useValue: jasmine.createSpyObj('environment', ['']),
        },
        {
          provide: HttpClient,
          useValue: jasmine.createSpyObj('HttpClient', ['']),
        },
      ],
    });
    service = TestBed.inject(CheckoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
