import { TestBed } from '@angular/core/testing';

import { OrdenadorRestService } from './ordenador-rest.service';

describe('OrednadorRestService', () => {
  let service: OrdenadorRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdenadorRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
