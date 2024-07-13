import { Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { GenresComponent } from './movie/genres/genres.component';
import { FavoritesComponent } from './movie/favorites/favorites.component';
import { SettingsComponent } from './movie/settings/settings.component';
import { GenreComponent } from './movie/genre/genre.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'movies',
        pathMatch: 'full'
    },
    {
        path: 'movies',
        loadChildren: () => import('./movie/movie.module').then(m=>m.MovieModule)
    },
    {
        path: 'genres', component: GenresComponent
    },
    {
        path: 'genre/:genre', component: GenreComponent
    },
    {
        path: 'favorites', component: FavoritesComponent
    },
    {
        path: 'settings', component: SettingsComponent
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{ }