import { TestBed } from '@angular/core/testing';

import { BDDService } from './bdd.service';

describe('BDDService', () => {
  let service: BDDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BDDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
