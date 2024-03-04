import { TestBed } from '@angular/core/testing';

import { BalancedSubstringService } from './balanced-substring.service';

describe('BalancedSubstringService', () => {
  let service: BalancedSubstringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BalancedSubstringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
