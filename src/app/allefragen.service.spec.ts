import { TestBed } from '@angular/core/testing';

import { AllefragenService } from './allefragen.service';

describe('AllefragenService', () => {
  let service: AllefragenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllefragenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
