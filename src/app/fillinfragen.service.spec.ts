import { TestBed } from '@angular/core/testing';

import { FillinfragenService } from './fillinfragen.service';

describe('FillinfragenService', () => {
  let service: FillinfragenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FillinfragenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
