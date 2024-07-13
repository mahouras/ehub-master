import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieRoutingModule } from './movie.routes';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieComponent } from "./movie/movie.component";
import { AppComponent } from '../app.component';
import { BrowserModule } from '@angular/platform-browser';




@NgModule({
  declarations: [
    MovieDetailComponent
  ],

  imports: [CommonModule, MovieRoutingModule],
})
export class MovieModule {}
