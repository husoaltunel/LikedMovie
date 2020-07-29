import { MessageService } from './message.service';
import { Movies } from './movie-datas';
import { Movie } from './movie';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private messageService : MessageService,private http : HttpClient) { }

  movieDatasUrl = 'api/movies';

  getMovies() : Observable<Movie[]> { 
    this.messageService.add('movieService : Movies Listing');
    return this.http.get<Movie[]>(this.movieDatasUrl);
  }
  getMovie(id) : Observable<Movie>{
    this.messageService.add('Movie Service: Detail id '+id)
    return this.http.get<Movie>(this.movieDatasUrl+'/'+id);

  }


}

