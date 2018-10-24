import { TestBed, async, inject } from '@angular/core/testing';

import { AuthService } from './auth.service.ts.guard';

describe('Auth.Service.TsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService]
    });
  });

  it('should ...', inject([AuthService], (guard: AuthService) => {
    expect(guard).toBeTruthy();
  }));
});
