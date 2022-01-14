import { TestBed } from '@angular/core/testing';

import { FortService } from './fort.service';

describe('FortService', () => {
  let service: FortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
