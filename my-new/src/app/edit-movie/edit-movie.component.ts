import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MovieService } from '../services/movie.service';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
// import { DatePipe } from '@angular/common';
import { Movie } from '../modals/Movie';
@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss']
})
export class EditMovieComponent implements OnInit{
MovieGroup!:FormGroup;
posterUrl=''
Moviedata=''
  movieObj : Movie | any;
constructor(private fb:FormBuilder,private router:Router, private movieService:MovieService, private activatedRoute:ActivatedRoute){}
ngOnInit():void{
  this.Initializer();
  let mid=this.activatedRoute.snapshot.params['id'];
  console.log(mid)
  this.movieService.GetElementbyid(mid).subscribe((resp:any)=>{
    console.log(resp);
    console.log(resp.data[0].movie_name);    
    this.MovieGroup.controls['movie_id'].setValue(resp.data[0].movie_id);
    this.MovieGroup.controls['movie_name'].setValue(resp.data[0].movie_name);
    this.MovieGroup.controls['movie_date'].setValue(resp.data[0].movie_date.toString().slice(0,10));
    this.posterUrl=resp.data[0].movie_poster;
    this.MovieGroup.controls['movie_actor'].setValue(resp.data[0].movie_actor);
    this.MovieGroup.controls['movie_description'].setValue(resp.data[0].movie_description);
    console.log(resp.data[0].movie_poster)
    // this.MovieGroup.controls['movie_poster'].setValue(resp.data[0].movie_poster);
  })
}
Initializer(){
  this.MovieGroup= this.fb.group({
    movie_id: ['', Validators.required],
    movie_name: ['', Validators.required],
    movie_poster: ['', Validators.required],
    movie_date: ['', Validators.required],
    movie_actor: ['', Validators.required],
    movie_description: ['', Validators.required],
  });
}

updateMovie(): void {
  this.Moviedata = this.MovieGroup.value;
  console.log(this.Moviedata);
  this.movieService.UpdateMovie(this.Moviedata).subscribe((response: any) => {
    console.log("movie updated successfully" + response.data);
  });
  this.MovieGroup.reset();
  this.router.navigate(['/movielist'])
}
// convertToBase64(event: any): void {
//   const file = event.target.files[0];
//   console.log(file)
//   if (file) {
//     const reader = new FileReader();
//     reader.onload = (loadEvent: any) => {
//       const base64Image = loadEvent.target.result.split(',')[1];
//       this.posterUrl=loadEvent.target.result;
//       this.MovieGroup.controls['movie_poster'].setValue(base64Image);
//     };
//     reader.readAsDataURL(file);
//   }

// }

}


