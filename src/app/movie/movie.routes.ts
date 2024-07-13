import { Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

export const routes: Routes = [{
    path: '',
    component: MovieListComponent,
},
{
    path: ':id',
    component: MovieDetailComponent,
}
];

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MovieRoutingModule{ }