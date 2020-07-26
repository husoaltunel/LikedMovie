import { Movie } from './../movie/movie';
import { Component } from '@angular/core';

@Component({
    selector: 'movies',
    templateUrl: 'movies.component.html',
    styleUrls: ['movies.component.css']
})
export class MoviesComponent {
    title = 'Movie List';
    movie: Movie = { id: 1, name: "Hell" };

}