import { TestBed } from '@angular/core/testing';

import { MovieService } from './movie.service';

describe('MovieService', () => {
  let service: MovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

// Importa las herramientas necesarias para configurar pruebas
// Importa el servicio MovieService que se va a probar

// Inicia la descripción de las pruebas para el servicio MovieService
// Declara una variable para almacenar la instancia del servicio MovieService

// Antes de cada prueba, configura el entorno de pruebas de Angular
// Crea una instancia del servicio MovieService usando TestBed

// Prueba: verifica que el servicio MovieService se haya creado correctamente
// Comprueba que la variable 'service' contenga una instancia válida del servicio

// Cierra la descripción de las pruebas para MovieService
