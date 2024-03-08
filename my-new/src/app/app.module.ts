
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TesComponent } from './tes/tes.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { HeaderComponent } from './header/header.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { MoviescomponentComponent } from './moviescomponent/moviescomponent.component';
@NgModule({
  declarations: [
    AppComponent,
    TesComponent,
    HomeComponent,
    MainComponent,
    FormComponent,
    MoviesListComponent,
    AddmovieComponent,
    HeaderComponent,
    EditMovieComponent,
    MoviescomponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
