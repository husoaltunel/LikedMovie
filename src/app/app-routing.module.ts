import { MoviesComponent } from './movies/movies.component';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

const routes : Routes = [
  {path: 'movies',component: MoviesComponent}
]

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
