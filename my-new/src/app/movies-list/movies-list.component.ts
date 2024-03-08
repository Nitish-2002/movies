import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit{
  movies:any[]=[]
  constructor(private movieService:MovieService, private router:Router){}
  moviePoster=''
  ngOnInit():void{
    this.getAllMovies();
  }
  DeleteMovie(movie_id:any):void{
    this.movieService.DeleteMovie(movie_id).subscribe((resp:any)=>{
        alert("Movie deleted");
        this.getAllMovies();
    })
  }
  EditMovie(movie_id:any){
    this.router.navigate(['/edit/'+movie_id])
    this.movieService.GetElementbyid(movie_id).subscribe((resp:any)=>{
      console.log(resp)
    })
  }
  getAllMovies(){
    this.movieService.getAllMovies().subscribe(
      (response:any)=>{
        this.movies=(response.data);
        this.moviePoster=response.data.movie_poster;
      console.log(response)
    })
  }
  toggleDetails(movie:any){
    movie.showDetails= !movie.showDetails;
  }
  c:number=0;
  Countvalues(){
    this.c=this.c+1;
    console.log(this.c)
    return this.c;
  }
}
