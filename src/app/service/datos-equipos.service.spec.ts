import { TestBed } from '@angular/core/testing';

import { DatosEquiposService } from './datos-equipos.service';

describe('DatosEquiposService', () => {
  let service: DatosEquiposService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosEquiposService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
