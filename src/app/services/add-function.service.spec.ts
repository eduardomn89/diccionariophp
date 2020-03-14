import { TestBed } from '@angular/core/testing';
import { AddFunctionService } from './add-function.service';

describe('AddFunctionService', () => {

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddFunctionService = TestBed.get(AddFunctionService);
    expect(service).toBeTruthy();
  });

});
