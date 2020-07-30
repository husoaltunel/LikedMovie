import { MovieService } from './../movie.service';
import { Movie } from './../movie';
import { Component } from '@angular/core';


@Component({
    selector: 'movies',
    templateUrl: 'movies.component.html',
    styleUrls: ['movies.component.css']
})
export class MoviesComponent {

    constructor(private movieService: MovieService) {

    }
    ngOnInit(): void {
        this.getMovies();

    }

    title = 'Movie List';
    selectedMovie: Movie;
    movies: Movie[];
    movieSelect(Movie: Movie) {
        this.selectedMovie = Movie;
    }
    getMovies(): void {
        this.movieService.getMovies().subscribe(movies => this.movies = movies);
    }

    addMovie(imgUrl: string, name: string, description: string): void {


        this.movieService.addMovie({ name: name, description: description, imgUrl: imgUrl } as Movie).subscribe(movie => {
            this.movies.push(movie);
        });
    }
    deleteMovie(id: number): void {
        this.movies = this.movies.filter(movie => movie.id !== id )
        this.movieService.deleteMovie(id).subscribe()

    }

}