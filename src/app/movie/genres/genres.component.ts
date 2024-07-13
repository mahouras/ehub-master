// Importación de módulos y clases necesarias
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../Models/movie.model';
import { MovieService } from '../services/movie.service';
import { Observable } from 'rxjs';

// Decorador @Component define el componente Angular
@Component({
  selector: 'app-genres', // Selector CSS para instanciar el componente en una plantilla
  standalone: true, // Indica que el componente es independiente
  imports: [CommonModule], // Módulos que se importan para este componente
  templateUrl: './genres.component.html', // Ruta de la plantilla HTML
  styleUrl: './genres.component.css' // Ruta de la hoja de estilos CSS
})
export class GenresComponent {
  genres$: Observable<any>; // Observable para almacenar los géneros de películas

  // Constructor con inyección de dependencias para el servicio MovieService
  constructor(private movieService: MovieService) {
    this.genres$ = this.movieService.getGenres(); // Obtiene los géneros de películas del servicio
  }
}