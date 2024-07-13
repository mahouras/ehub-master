// Importación de módulos y componentes necesarios para las pruebas
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenreComponent } from './genre.component';

// Bloque de pruebas para el componente GenreComponent
describe('GenreComponent', () => {
  let component: GenreComponent; // Variable para la instancia del componente
  let fixture: ComponentFixture<GenreComponent>; // Variable para el fixture del componente

  // Configuración que se ejecuta antes de cada prueba
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenreComponent] // Importa el componente que se va a probar
    })
    .compileComponents(); // Compila los componentes de manera asíncrona

    fixture = TestBed.createComponent(GenreComponent); // Crea el fixture del componente
    component = fixture.componentInstance; // Obtiene la instancia del componente
    fixture.detectChanges(); // Detecta cambios y actualiza el componente
  });

  // Prueba para verificar si el componente se crea correctamente
  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica que la instancia del componente se haya creado correctamente
  });
});