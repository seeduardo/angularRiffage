import { TestBed } from '@angular/core/testing';

import { RiffService } from './riff.service';

describe('RiffService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RiffService = TestBed.get(RiffService);
    expect(service).toBeTruthy();
  });
});
