import { TestBed } from '@angular/core/testing';

import { RuthService } from './ruth.service';

describe('RuthService', () => {
  let service: RuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
