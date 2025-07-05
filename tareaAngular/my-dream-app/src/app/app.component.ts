import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HelloWordComponent } from './hello-word/hello-word.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,CommonModule,FormsModule,
    HelloWordComponent,UserComponent,HttpClientModule],
  providers: [DataService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name : string;
  age : number;
  title = 'my-dream-app';
  email;
  webpage : string;
  hobbies : string[];
  showhobbies : boolean;
  users = ["Diego", "Luci", "Ale"];

  constructor(private dataService: DataService){
    console.log("Constructor trabajando...");
    this.email = 'dsantacruzv@unsa.edu.pe';
    this.name = 'Diego Santa Cruz Villa';
    this.age = 19;
    this.webpage = "http://www.unsa.edu.pe";
    this.hobbies = ["Videojuegos","Basquet","Programacion","Lectura"];
    this.showhobbies = false;
    this.dataService.getData().subscribe(data=>{
      console.log(data);
    })
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

  deleteuser(user:any){
    for(let i=0; i<this.users.length; i++){
      if(user==this.users[i]){
        this.users.splice(i,1);
      }
    }
  }

  adduser(newUser:any){
    this.users.push(newUser.value);
    newUser.value='';
    newUser.focus();
    return false;
  }
}
