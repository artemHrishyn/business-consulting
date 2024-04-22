import { TestBed } from '@angular/core/testing';

import { SetValueService } from './set-value.service';

describe('SetValueService', () => {
  let service: SetValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
