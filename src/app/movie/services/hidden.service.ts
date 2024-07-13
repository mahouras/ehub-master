import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HiddenService {

  private hiddenMovies: Array<number> = [];

  constructor() {
    this.loadHidden();
  }

  getHidden(): Array<number> {
    return this.hiddenMovies;
  }

  isHidden(id: number): boolean {
    return this.hiddenMovies.includes(id);
  }

  addHidden(id: number): void {
    if (!this.hiddenMovies.includes(id)) {
      this.hiddenMovies.push(id);
      this.saveHidden();
    }
  }

  removeHidden(id: number): void {
    const index = this.hiddenMovies.indexOf(id, 0);
    if (index > -1) {
      this.hiddenMovies.splice(index, 1);
      this.saveHidden();
    }
  }

  removeAllHidden(): void {
    this.hiddenMovies = [];
    this.saveHidden();
  }

  private loadHidden(): void {
    const storedHidden = localStorage.getItem('moviesHidden');
    if (storedHidden) {
      this.hiddenMovies = JSON.parse(storedHidden);
    }
  }

  private saveHidden(): void {
    localStorage.setItem('moviesHidden', JSON.stringify(this.hiddenMovies));
  }
}

// Servicio Injectable HiddenService
// Gestiona el estado de las películas ocultas

// Proporciona el servicio en el ámbito raíz de la aplicación
// para asegurar una única instancia global

// Array que almacena los IDs de las películas ocultas
// Inicializado vacío por defecto

// Constructor del servicio
// Carga los IDs de películas ocultas almacenados localmente al inicializar

// Método para obtener todos los IDs de películas ocultas
// Retorna el array de IDs de películas ocultas

// Método para verificar si una película con un ID específico está oculta
// Retorna true si el ID está presente en el array de películas ocultas, de lo contrario false

// Método para agregar un ID de película a la lista de películas ocultas
// Si el ID no está presente en el array, lo agrega y guarda el estado actual en el almacenamiento local

// Método para remover un ID de película de la lista de películas ocultas
// Encuentra el índice del ID en el array y lo elimina si existe, luego guarda el estado actual en el almacen
