import { MessageService } from './message.service';
import { Movies } from './movie-datas';
import { Movie } from './movie';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private messageService : MessageService) { }

  getMovies() : Observable<Movie[]> { 
    this.messageService.add('movieService : Movies Listing');
    return of(Movies);
  }
  getMovie(id) : Observable<Movie>{
    this.messageService.add('Movie Service: Detail id '+id)
    return of(Movies.find(movie => movie.id === id));

  }


}

