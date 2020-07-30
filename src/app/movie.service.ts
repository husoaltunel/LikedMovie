import { MessageService } from './message.service';
import { Movie } from './movie';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private messageService : MessageService,private http : HttpClient) { }

  movieDatasUrl = 'api/movies';
  addedMovie : Movie;

  getMovies() : Observable<Movie[]> { 
    this.messageService.add('movieService : Movies Listing');
    return this.http.get<Movie[]>(this.movieDatasUrl);
  }
  getMovie(id) : Observable<Movie>{
    this.messageService.add('Movie Service: Detail id '+id)
    return this.http.get<Movie>(this.movieDatasUrl+'/'+id);

  }
  updateMovie(movie : Movie) : Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    };
     return this.http.put(this.movieDatasUrl,movie,httpOptions);
  }
  
  addMovie(movie : Movie) : Observable<Movie> {
    
    return this.http.post<Movie>(this.movieDatasUrl,movie);
  }
  deleteMovie(id: number) : Observable<Movie> {
    
    return this.http.delete<Movie>(this.movieDatasUrl+"/"+id);
  }
  

}

