import { TestBed } from '@angular/core/testing';
import { NotificationService } from '../notification.service';

import { ErrorPrintInterceptor } from './error-print.interceptor';

describe('ErrorPrintInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        ErrorPrintInterceptor,
        {
          provide: NotificationService,
          useValue: jasmine.createSpyObj('NotificationService', ['']),
        },
      ],
    })
  );

  it('should be created', () => {
    const interceptor: ErrorPrintInterceptor = TestBed.inject(
      ErrorPrintInterceptor
    );

    expect(interceptor).toBeTruthy();
  });
});
