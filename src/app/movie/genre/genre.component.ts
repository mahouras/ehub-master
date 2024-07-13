import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MovieService } from '../services/movie.service';
import { Movie } from '../Models/movie.model';
import { CommonModule } from '@angular/common';

// Decorador @Component define el componente Angular
@Component({
  selector: 'app-genre', // Selector CSS para instanciar el componente en una plantilla
  standalone: true, // Indica que el componente es independiente
  imports: [CommonModule], // Módulos que se importan para este componente
  templateUrl: './genre.component.html', // Ruta de la plantilla HTML
  styleUrls: ['./genre.component.css'] // Ruta de la hoja de estilos CSS
})
export class GenreComponent implements OnInit { // Define la clase del componente implementando OnInit
  genre: string;
  movies: Movie[] = [];
  genreTitle: string;

  // Constructor con inyección de dependencias para servicios
  constructor(
    private route: ActivatedRoute, // Servicio para acceder a la información de la ruta activa
    private movieService: MovieService // Servicio para obtener películas
  ) {}

  // Inicialización del componente
  ngOnInit() {
    // Obtiene el género de la ruta y lo normaliza
    this.genreTitle = this.route.snapshot.paramMap.get('genre') || 'Ver género';
    this.genre = this.normalizeString(this.route.snapshot.paramMap.get('genre') || '');
    console.log(this.genre);
    
    // Actualiza la lista de películas según el género
    this.update();
  }

  // Método para actualizar la lista de películas
  update() {
    this.movieService.getMovies().subscribe(movies => {
      if (movies) {
        this.movies = movies.filter(movie => this.normalizeString(movie.genre) === this.genre);
      }
    });
  }

  // Método para normalizar cadenas (convertir a minúsculas y eliminar espacios en blanco)
  private normalizeString(str: string): string {
    return str.toLowerCase().trim();
  }
}