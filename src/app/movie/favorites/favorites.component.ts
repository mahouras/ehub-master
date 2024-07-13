// Importaciones necesarias
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesService } from '../services/favorites.service';
import { MovieService } from '../services/movie.service';
import { Observable } from 'rxjs';
import { Movie } from '../Models/movie.model';

// Decorador del componente
@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {
  // Variables del componente
  favorites: Array<number>;
  movies$: Observable<Movie[]>;
  favoriteMovies: Movie[] = [];

  // Constructor con inyección de servicios
  constructor(private favoritesService: FavoritesService, private movieService: MovieService) {}

  // Inicialización del componente
  ngOnInit() {
    this.favorites = this.favoritesService.getFavorites();
    this.updateFavorites();
  }

  // Método para eliminar una película de favoritos
  removeFavorite(id: number) {
    this.favoritesService.removeFavorite(id);
    this.updateFavorites();
  }

  // Método para actualizar la lista de películas favoritas
  updateFavorites() {
    this.movieService.getMovies().subscribe(movies => {
      if (movies) {
        this.favoriteMovies = movies.filter(movie => this.favorites.includes(+movie.id));
      }
    });
  }
}