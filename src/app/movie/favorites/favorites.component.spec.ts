// Importación de los módulos y clases necesarios para las pruebas
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesComponent } from './favorites.component';

// Descripción del bloque de pruebas para el componente FavoritesComponent
describe('FavoritesComponent', () => {
  let component: FavoritesComponent; // Declaración de la variable para la instancia del componente
  let fixture: ComponentFixture<FavoritesComponent>; // Declaración de la variable para el fixture del componente

  // Configuración que se ejecuta antes de cada prueba
  beforeEach(async () => {
    // Configuración del entorno de pruebas
    await TestBed.configureTestingModule({
      imports: [FavoritesComponent] // Importa el componente que se va a probar
    })
    .compileComponents(); // Compila los componentes asíncronamente

    // Crea una instancia del componente y del fixture
    fixture = TestBed.createComponent(FavoritesComponent);
    component = fixture.componentInstance; // Obtiene la instancia del componente
    fixture.detectChanges(); // Detecta cambios y actualiza el componente
  });

  // Prueba para verificar si el componente se crea correctamente
  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica que la instancia del componente sea verdadera (existe)
  });
});