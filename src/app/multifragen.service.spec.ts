import { TestBed } from '@angular/core/testing';

import { MultifragenService } from './multifragen.service';

describe('MultifragenService', () => {
  let service: MultifragenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultifragenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
