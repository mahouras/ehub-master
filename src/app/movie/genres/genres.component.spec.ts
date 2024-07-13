// Importación de módulos y componentes necesarios para las pruebas
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenresComponent } from './genres.component';

// Bloque de pruebas para el componente GenresComponent
describe('GenresComponent', () => {
  let component: GenresComponent; // Variable para la instancia del componente
  let fixture: ComponentFixture<GenresComponent>; // Variable para el fixture del componente

  // Configuración que se ejecuta antes de cada prueba
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenresComponent] // Importa el componente que se va a probar
    })
    .compileComponents(); // Compila los componentes de manera asíncrona

    fixture = TestBed.createComponent(GenresComponent); // Crea el fixture del componente
    component = fixture.componentInstance; // Obtiene la instancia del componente
    fixture.detectChanges(); // Detecta cambios y actualiza el componente
  });

  // Prueba para verificar si el componente se crea correctamente
  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica que la instancia del componente se haya creado correctamente
  });
});