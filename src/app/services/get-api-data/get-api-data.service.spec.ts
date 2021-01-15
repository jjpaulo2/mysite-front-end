import { TestBed } from '@angular/core/testing';

import { GetApiDataService } from './get-api-data.service';

describe('GetApiDataService', () => {
  let service: GetApiDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetApiDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
