import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class MovieService  {
  movieurl=environment.url;
  constructor( private httpClient : HttpClient ) { }
  getAllMovies(){
   return this.httpClient.get(this.movieurl+'/getall',{responseType:'json'})
  }
  AddMovie(Moviedata:any){
    return this.httpClient.post(this.movieurl+'/createmovie',Moviedata, {responseType:'json'})
  }
  DeleteMovie(id:any){
    return this.httpClient.delete(this.movieurl+'/deletemovie/'+id)
  }
  GetElementbyid(id:any){
    return this.httpClient.get(this.movieurl+'/getmoviebyid/'+id)
  }
  UpdateMovie(Moviedata:any){
    return this.httpClient.put(this.movieurl+'/updatemovie',Moviedata)
  }
}
 