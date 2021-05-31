import { TestBed } from '@angular/core/testing';

import { DatosServicioService } from './datos-servicio.service';

describe('DatosServicioService', () => {
  let service: DatosServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
