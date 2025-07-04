import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-dream-app';
  name : string;
  email;
  webpage : string;
  hobbies : string[];

  constructor(){
    console.log("Constructor trabajando...");
    this.name = 'Diego Santa Cruz Villa';
    this.email = 'dsantacruzv@unsa.edu.pe';
    this.webpage = "http://www.unsa.edu.pe";
    this.hobbies = ["Videojuegos","Basquet","Programacion","Lectura"];
  }

  showhobbies() {
    return true;
  }
}
