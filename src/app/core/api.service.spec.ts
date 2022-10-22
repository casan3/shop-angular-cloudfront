import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { CONFIG_TOKEN } from './injection-tokens/config.token';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ApiService,
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
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
