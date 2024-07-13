import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private favorites: Array<number> = [];

  constructor() {
    this.loadFavorites();
  }

  getFavorites(): Array<number> {
    return this.favorites;
  }

  isFavorite(id: number): boolean {
    return this.favorites.includes(id);
  }

  addFavorite(id: number): void {
    if (!this.favorites.includes(id)) {
      this.favorites.push(id);
      this.saveFavorites();
    }
  }

  removeFavorite(id: number): void {
    const index = this.favorites.indexOf(id, 0);
    if (index > -1) {
      this.favorites.splice(index, 1);
      this.saveFavorites();
    }
  }

  removeAllFavorites(): void {
    this.favorites = [];
    this.saveFavorites();
  }

  private loadFavorites(): void {
    const storedFavorites = localStorage.getItem('moviesFavorites');
    if (storedFavorites) {
      this.favorites = JSON.parse(storedFavorites);
    }
  }

  private saveFavorites(): void {
    localStorage.setItem('moviesFavorites', JSON.stringify(this.favorites));
  }
}
// Servicio FavoritesService que gestiona la lista de películas favoritas del usuario

// Injectable decorator que marca la clase como un servicio inyectable a nivel de root

// Variable privada que almacena los IDs de las películas favoritas del usuario

// Constructor del servicio FavoritesService
// Carga las películas favoritas almacenadas en el almacenamiento local al inicializar el servicio

// Método getFavorites(): retorna la lista de IDs de las películas favoritas

// Método isFavorite(id): verifica si una película con el ID proporcionado está en la lista de favoritos

// Método addFavorite(id): agrega un ID de película a la lista de favoritos si no está presente y guarda los cambios

// Método removeFavorite(id): elimina un ID de película de la lista de favoritos y guarda los cambios

// Método removeAllFavorites(): elimina todos los IDs de películas favoritas y guarda los cambios

// Método privado loadFavorites(): carga las películas favoritas almacenadas desde el almacenamiento local

// Método privado saveFavorites(): guarda la lista actual de películas favoritas en el almacenamiento local
