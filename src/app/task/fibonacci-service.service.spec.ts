import { TestBed } from '@angular/core/testing';

import { FibonacciServiceService } from './fibonacci-service.service';

describe('FibonacciServiceService', () => {
  let service: FibonacciServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FibonacciServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
