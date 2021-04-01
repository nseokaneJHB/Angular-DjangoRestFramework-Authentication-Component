import { TestBed } from '@angular/core/testing';

import { APICallsService } from './apicalls.service';

describe('APICallsService', () => {
  let service: APICallsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APICallsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
