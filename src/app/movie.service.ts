import { Movies } from './movie-datas';
import { Movie } from './movie';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovies() : Movie[] { 
    return Movies;
  }
}
