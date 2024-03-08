import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { MovieService } from '../services/movie.service';
@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.scss'],
})
export class AddmovieComponent implements OnInit {
  movieFormGroup!: FormGroup;
  Moviedata = '';

  posterUrl: any;
  base64Image: string | undefined;
  constructor(private fb: FormBuilder, private movieService: MovieService) {}
  ngOnInit(): void {
    this.movieFormGroup = this.fb.group({
      movie_id: ['', Validators.required],
      movie_name: ['', Validators.required],
      movie_poster: ['', Validators.required],
      movie_date: ['', Validators.required],
      movie_actor: ['', Validators.required],
      movie_description: ['', Validators.required],
    });
  }
  saveMovie(): void {
    // this.movieFormGroup.controls['movie_date'].setValue(movie_date.toString().slice(0,10));
    // const formattedDate = this.datePipe.transform(this.movieFormGroup.value.movie_date, 'MM-dd-yyyy');
    const formattedDate = this.movieFormGroup.value.movie_date
      .toString()
      .slice(0, 10);
    console.log('date is ghere' + this.movieFormGroup.value.movie_date);
    // Set the formatted date in the form
    this.movieFormGroup.controls['movie_date'].setValue(formattedDate);
    this.Moviedata = this.movieFormGroup.value;
    console.log(this.Moviedata);
    this.movieService.AddMovie(this.Moviedata).subscribe((response: any) => {
      console.log('movie added successfully' + response.data);
    });

    this.movieFormGroup.reset();
  }

  convertToBase64(event: any): void {
    const file = event.target.files[0];
    console.log(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = (loadEvent: any) => {
        const base64Image = loadEvent.target.result.split(',')[1];
        this.posterUrl = loadEvent.target.result;
        // console.log(posterUrl)
        this.movieFormGroup.controls['movie_poster'].setValue(base64Image);
      };
      reader.readAsDataURL(file);
    }
  }

  reset(): void {
    this.movieFormGroup.reset();
    this.Moviedata = '';
  }
}
