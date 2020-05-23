import {TestBed} from '@angular/core/testing';

import {ReecService} from './reec.service';

describe('ReecService', () => {
  let service: ReecService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReecService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
