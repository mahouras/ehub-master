import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../services/movie.service';
import { Observable } from 'rxjs';
import { Movie } from '../Models/movie.model';
import { HiddenService } from '../services/hidden.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {

  constructor(private movieService: MovieService, private hiddenService: HiddenService) { }

  hidden: Array<number>;
  hiddenMovies: Movie[] = [];

  ngOnInit() {
    this.hidden = this.hiddenService.getHidden();
    this.updateHidden();
  }

  removeHidden(id: number) {
    this.hiddenService.removeHidden(id);
    this.updateHidden();
  }

  updateHidden() {
    this.movieService.getMovies().subscribe(movies => {
      if (movies) {
        this.hiddenMovies = movies.filter(movie => this.hidden.includes(+movie.id)); 
      }   
    });
  }
  
}
