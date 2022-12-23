import { TestBed } from '@angular/core/testing';

import { SinglefragenService } from './singlefragen.service';

describe('SinglefragenService', () => {
  let service: SinglefragenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SinglefragenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
