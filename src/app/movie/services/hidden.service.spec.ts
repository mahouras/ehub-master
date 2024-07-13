import { TestBed } from '@angular/core/testing';

import { HiddenService } from './hidden.service';

describe('HiddenService', () => {
  let service: HiddenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HiddenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
// Pruebas unitarias para el servicio HiddenService

// Configura el entorno de pruebas antes de cada prueba
// Inyecta una instancia del servicio HiddenService para ser probada

// Prueba unitaria: asegura que el servicio HiddenService se haya creado correctamente
