import { TestBed } from '@angular/core/testing';

import { AeronaveResolver } from './aeronave.resolver';

describe('AeronaveResolver', () => {
  let resolver: AeronaveResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AeronaveResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
