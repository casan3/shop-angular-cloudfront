import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { CONFIG_TOKEN } from '../core/injection-tokens/config.token';

import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;

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
        ProductsService,
      ],
    });
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
