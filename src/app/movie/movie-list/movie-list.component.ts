// Importación de módulos y servicios necesarios
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Observable } from 'rxjs';
import { Movie } from '../Models/movie.model';
import { RouterModule } from '@angular/router';
import { HiddenService } from '../services/hidden.service';

// Decorador @Component define el componente Angular
@Component({
  selector: 'app-movie-list', // Selector CSS para instanciar el componente en una plantilla
  standalone: true, // Indica que el componente es independiente
  imports: [CommonModule, RouterModule], // Módulos que se importan para este componente
  templateUrl: './movie-list.component.html', // Ruta de la plantilla HTML
  styleUrl: './movie-list.component.css' // Ruta de la hoja de estilos CSS
})
export class MovieListComponent implements OnInit { // Define la clase del componente implementando OnInit

  movies$: Observable<Movie[]>; // Variable observable para almacenar la lista de películas
  constructor(
    private movieService: MovieService, // Inyección de dependencia del servicio de películas
    private hiddenService: HiddenService // Inyección de dependencia del servicio de películas ocultas
  ) {}

  hiddenMovies: Array<number>; // Array para almacenar IDs de películas ocultas
  movies: Movie[] = []; // Array para almacenar la lista de películas filtradas

  ngOnInit() { // Método que se ejecuta al inicializar el componente
    this.hiddenMovies = this.hiddenService.getHidden(); // Obtiene la lista de IDs de películas ocultas
    this.updateMovies(); // Actualiza la lista de películas filtradas
  }

  hiddenMovie(id: number) { // Método para ocultar una película específica
    this.hiddenService.addHidden(id); // Añade el ID de la película al servicio de películas ocultas
    this.updateMovies(); // Actualiza la lista de películas filtradas
  }

  updateMovies() { // Método para actualizar la lista de películas filtradas
    this.movieService.getMovies().subscribe(movies => { // Se suscribe al observable de películas
      if (movies) {
        this.movies = movies.filter(movie => !this.hiddenMovies.includes(+movie.id)); // Filtra las películas ocultas
      }
    });
  }
}