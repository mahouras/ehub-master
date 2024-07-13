import { TestBed } from '@angular/core/testing';

import { FavoritesService } from './favorites.service';

describe('FavoritesService', () => {
  let service: FavoritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

// Importa el módulo de pruebas unitarias de Angular Core Testing
// Importa el servicio FavoritesService que se va a probar

// Inicia la descripción de la suite de pruebas para FavoritesService
// Declara una variable local para el servicio FavoritesService

// Configura el entorno de pruebas de Angular
// Inyecta el servicio FavoritesService en la variable service para ser utilizado en las pruebas

// Prueba unitaria: debe ser creado el servicio FavoritesService
// Verifica que la variable service no sea nula para asegurarse de que el servicio se haya creado correctamente
