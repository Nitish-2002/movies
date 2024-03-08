import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TesComponent } from './tes/tes.component';
import { MainComponent } from './main/main.component';
import { FormComponent } from './form/form.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { HeaderComponent } from './header/header.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { MoviescomponentComponent } from './moviescomponent/moviescomponent.component';
const routes: Routes = [
  {path:'',component:HeaderComponent},
  {path:'',component:MainComponent},
  {path:'home',component:HomeComponent},
  {path:'tes',component:TesComponent},
  {path:'movieslist',component:MoviescomponentComponent},
  {path:'addmovie',component:AddmovieComponent},
  {path:'edit/:id',component:EditMovieComponent},
  {path:'**',component:TesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
