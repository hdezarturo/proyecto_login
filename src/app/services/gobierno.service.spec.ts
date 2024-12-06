import { TestBed } from '@angular/core/testing';

import { GobiernoService } from './gobierno.service';

describe('GobiernoService', () => {
  let service: GobiernoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GobiernoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
