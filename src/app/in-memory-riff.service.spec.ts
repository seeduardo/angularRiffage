import { TestBed } from '@angular/core/testing';

import { InMemoryRiffService } from './in-memory-riff.service';

describe('InMemoryRiffService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemoryRiffService = TestBed.get(InMemoryRiffService);
    expect(service).toBeTruthy();
  });
});
