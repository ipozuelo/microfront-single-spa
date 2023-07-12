import { TestBed } from '@angular/core/testing';

import { ApiFilmsService } from './services/api-films.service';

describe('ApiFilmsService', () => {
  let service: ApiFilmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiFilmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
