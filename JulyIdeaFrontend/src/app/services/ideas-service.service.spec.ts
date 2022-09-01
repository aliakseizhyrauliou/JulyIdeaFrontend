import { TestBed } from '@angular/core/testing';

import { IdeasServiceService } from './ideas-service.service';

describe('IdeasServiceService', () => {
  let service: IdeasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdeasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
