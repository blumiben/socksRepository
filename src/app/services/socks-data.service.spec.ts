import { TestBed } from '@angular/core/testing';

import { SocksDataService } from './socks-data.service';

describe('SocksDataService', () => {
  let service: SocksDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocksDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
