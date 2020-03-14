import { TestBed } from '@angular/core/testing';

import { UpdateFunctionService } from './update-function.service';

describe('UpdateFunctionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateFunctionService = TestBed.get(UpdateFunctionService);
    expect(service).toBeTruthy();
  });
});
