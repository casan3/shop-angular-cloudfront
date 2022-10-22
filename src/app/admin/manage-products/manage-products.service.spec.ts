import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { CONFIG_TOKEN } from '../../core/injection-tokens/config.token';

import { ManageProductsService } from './manage-products.service';

describe('ManageProductsService', () => {
  let service: ManageProductsService;

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
        ManageProductsService,
      ],
    });
    service = TestBed.inject(ManageProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
