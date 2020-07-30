import { MovieService } from './../movie.service';
import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {


  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private location: Location
  ) {

  }
  ngOnInit(): void {
    this.getMovie();
  }

  movie: Movie;

  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id).subscribe(movie => this.movie = movie);
  }
  updateMovie(): void {
    this.movieService.updateMovie(this.movie).subscribe(() => {
      this.location.back();
    });
    
  }


}
