import { TestBed } from '@angular/core/testing';

import { SearchTxtService } from './search-txt.service';

describe('SearchTxtService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchTxtService = TestBed.get(SearchTxtService);
    expect(service).toBeTruthy();
  });
});
