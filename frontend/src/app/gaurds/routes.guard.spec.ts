import { TestBed } from '@angular/core/testing';

import { RoutesGuard } from './routes.guard';

describe('RoutesGuard', () => {
  let guard: RoutesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RoutesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
