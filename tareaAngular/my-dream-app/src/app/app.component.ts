import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HelloWordComponent } from './hello-word/hello-word.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,HelloWordComponent,UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-dream-app';
  name : string;
  email;
  webpage : string;
  hobbies : string[];
  showhobbies : boolean;
  users = ["Diego", "Luci", "Ale"];

  constructor(){
    console.log("Constructor trabajando...");
    this.name = 'Diego Santa Cruz Villa';
    this.email = 'dsantacruzv@unsa.edu.pe';
    this.webpage = "http://www.unsa.edu.pe";
    this.hobbies = ["Videojuegos","Basquet","Programacion","Lectura"];
    this.showhobbies = false;
  }

  toggleHobbies(){
    this.showhobbies = !this.showhobbies;
  }

  newHobby(hobby:any){
    this.hobbies.push(hobby.value);
    hobby.value = "";
    return false;
  }

  sayhello(){
    alert("Hola desde app.component");
  }
}
