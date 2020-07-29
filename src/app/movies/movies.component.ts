import { MovieService } from './../movie.service';
import { Movie } from './../movie';
import { Component } from '@angular/core';


@Component({
    selector: 'movies',
    templateUrl: 'movies.component.html',
    styleUrls: ['movies.component.css']
})
export class MoviesComponent {
   
    constructor(private movieService : MovieService) {

    }
    ngOnInit(): void {
        this.getMovies();
        
    }

    title = 'Movie List';
    selectedMovie : Movie;
    movies : Movie [];
    movieSelect(Movie: Movie) {
        this.selectedMovie = Movie;
    }
    getMovies() : void {
       this.movieService.getMovies().subscribe(movies =>  this.movies = movies );
    }
}