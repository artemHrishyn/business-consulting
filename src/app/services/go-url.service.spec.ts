import { TestBed } from '@angular/core/testing';

import { GoUrlService } from './go-url.service';

describe('GoUrlService', () => {
  let service: GoUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
