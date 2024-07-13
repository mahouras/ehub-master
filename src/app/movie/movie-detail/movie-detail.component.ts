import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { MovieService } from "../services/movie.service";
import { Movie } from "../Models/movie.model";
import { FavoritesService } from '../services/favorites.service';

@Component({
  selector: "app-movie-detail",
  templateUrl: "./movie-detail.component.html",
  styleUrls: ["./movie-detail.component.css"],
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  id: number; // Almacena el ID de la película actual.
  movie: Movie; // Almacena los detalles de la película actual.
  movieSub$: Subscription; // Suscripción para obtener la película actual.
  genreMovie: string; // Almacena el género de la película actual normalizado.
  moviesRelated: Movie[] = []; // Almacena películas relacionadas según el género.

  constructor(
    private route: ActivatedRoute, // Para obtener parámetros de la ruta, como el ID de la película.
    private movieService: MovieService, // Servicio para obtener detalles de la película y películas relacionadas.
    private favoritesService: FavoritesService // Servicio para manejar la lista de películas favoritas.
  ) {}

  ngOnInit() {
    this.id = +(this.route.snapshot.paramMap.get('id') || 0); // Obtiene el ID de la película desde los parámetros de la ruta.
    this.movieSub$ = this.movieService.movie(this.id).subscribe(movie => { // Suscribe para obtener detalles de la película.
      if (movie !== undefined) {
        this.movie = movie; // Asigna los detalles de la película obtenida.
        this.genreMovie = this.normalizeString(movie.genre); // Normaliza y asigna el género de la película.
        this.showMoviesRelated(); // Llama a la función para mostrar películas relacionadas.
      } else {
        console.warn('Movie not found'); // Advertencia si la película no se encuentra.
      }
    });
  }

  showMoviesRelated() {
    this.movieService.getMovies().subscribe(movies => { // Suscribe para obtener todas las películas.
      if (movies) {
        this.moviesRelated = movies.filter(movie => this.normalizeString(movie.genre) === this.genreMovie); // Filtra y asigna las películas relacionadas al género actual.
      }
    });
  }

  toggleFavorite(movieId: number): void {
    if (this.favoritesService.isFavorite(+movieId)) {
      this.favoritesService.removeFavorite(+movieId); // Si la película ya es favorita, la elimina de favoritos.
    } else {
      this.favoritesService.addFavorite(+movieId); // Si la película no es favorita, la agrega a favoritos.
    }
  }

  isFavorite(movieId: number): boolean {
    return this.favoritesService.isFavorite(+movieId); // Verifica si una película es favorita.
  }

  ngOnDestroy(): void {
    this.movieSub$.unsubscribe(); // Cancela la suscripción al destruir el componente para evitar memory leaks.
  }
  
  private normalizeString(str: string): string {
    return str.toLowerCase().trim(); // Función para normalizar cadenas eliminando espacios y convirtiendo a minúsculas.
  }

}
