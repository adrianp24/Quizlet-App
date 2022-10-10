import { TestBed } from '@angular/core/testing';

import { SavedTestsService } from './saved-tests.service';

describe('SavedTestsService', () => {
  let service: SavedTestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavedTestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
