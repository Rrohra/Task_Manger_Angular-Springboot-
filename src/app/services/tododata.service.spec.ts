import { TestBed } from '@angular/core/testing';

import { TododataService } from './tododata.service';

describe('TododataService', () => {
  let service: TododataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TododataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
