import { TestBed } from '@angular/core/testing';

import { BackendTalkerService } from './backend-talker.service';

describe('BackendTalkerService', () => {
  let service: BackendTalkerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendTalkerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
