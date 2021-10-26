import { TestBed } from '@angular/core/testing';

import { CartepbService } from './cartepb.service';

describe('CartepbService', () => {
  let service: CartepbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartepbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
