import { Movies } from './movie-datas';
import { Movie } from './movie';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovies() : Observable<Movie[]> { 
    return of(Movies);
  }
}
