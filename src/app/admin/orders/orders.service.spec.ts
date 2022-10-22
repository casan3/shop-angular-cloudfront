import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { CONFIG_TOKEN } from '../../core/injection-tokens/config.token';
import { OrdersService } from './orders.service';

describe('OrdersService', () => {
  let service: OrdersService;

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
        OrdersService,
      ],
    });
    service = TestBed.inject(OrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
