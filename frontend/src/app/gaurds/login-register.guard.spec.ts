import { TestBed } from '@angular/core/testing';

import { LoginRegisterGuard } from './login-register.guard';

describe('LoginRegisterGuard', () => {
  let guard: LoginRegisterGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginRegisterGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
