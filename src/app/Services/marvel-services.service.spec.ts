import { TestBed } from '@angular/core/testing';

import { MarvelServicesService } from './marvel-services.service';

describe('MarvelServicesService', () => {
  let service: MarvelServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarvelServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
