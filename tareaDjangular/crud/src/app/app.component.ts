import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'crud';
  movies = [{id:1,title:'peli1',desc:'descripcion',year:2021}];

  constructor(private api:ApiService) {
    this.getMovies();
  }

  getMovies = () => {
    this.api.getAllMovies().subscribe (
      data => {
        console.log(data);
        this.movies = data;  //data.results;
      },
      error => {
        console.log(error);
      }    )  } 
}


