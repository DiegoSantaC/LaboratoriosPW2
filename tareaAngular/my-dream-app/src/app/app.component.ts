import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-dream-app';
  name = 'Diego Santa Cruz Villa';
  email = 'dsantacruzv@unsa.edu.pe';
  webpage = "http://www.unsa.edu.pe";
}
