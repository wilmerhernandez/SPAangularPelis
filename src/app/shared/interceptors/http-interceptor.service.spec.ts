import { TestBed } from '@angular/core/testing';

import { HttpInterceptorService } from './http-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

describe('HttpInterceptorService', () => {
  let service: HttpInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [
      HttpInterceptorService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpInterceptorService,
        multi: true,
      },
    ],});
    service = TestBed.inject(HttpInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
