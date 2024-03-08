import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  list:any=[];
  movieFormGroup!: FormGroup;
  Moviedata=''
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.movieFormGroup= this.fb.group({
      mid:['',Validators.required],
      mname:['',Validators.required],
      mposter:['',Validators.required],
      mdate:['',Validators.required],
      mactor:['',Validators.required],
      memail:['',[Validators.required, Validators.email]],
      mphno:['',[Validators.required,Validators.pattern(/^\d{10}$/)]]
    })
  }
  saveMovie(): void{
    this.Moviedata=JSON.stringify(this.movieFormGroup.value)
    alert(this.Moviedata);
    this.list.push(this.Moviedata);
    this.movieFormGroup.reset();
    console.log(this.list);
  }

  reset(): void{
    this.movieFormGroup.reset();
    this.Moviedata=''
  }
  
}
