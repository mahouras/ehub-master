import { Injectable } from '@angular/core';
import { movies,genres } from '../Models/movie.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovies(){
    return of(movies);
  }

  movie(id:number) {
    return of(
      movies.find(movie => +movie.id === +id)
    )
  }

  getGenres() {
    return of(genres);
  }
}
// Importa las herramientas necesarias para crear un servicio inyectable en Angular
// Importa los datos estáticos de películas y géneros desde el modelo movie.model
// Importa 'of' desde 'rxjs' para crear observables de datos estáticos

// Anota la clase como un servicio inyectable disponible en todo el módulo raíz de la aplicación

// Método para obtener todas las películas como un observable de películas

// Método para obtener una película por su ID, devuelve un observable de una película

// Método para obtener todos los géneros de películas como un observable de cadenas
