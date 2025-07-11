import { Component,HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'crud';
  movies: { nombre: string, url: string, logo: string }[] = [];
  videoList : { nombre: string, slug: string, url: string, logo: string }[] = [];
  videoSeleccionado: string = '';
  index = 0;
  cargando : boolean;

  constructor(private api:ApiService,private sanitizer: DomSanitizer) {
    this.cargando = true;
    this.getMovies();
  }

  getMovies = () => {
    this.api.getAllMovies().subscribe (
      data => {
        console.log(data);
        this.movies = data;
        this.generateVideoList();
        if (this.videoList.length > 0) {
          this.videoSeleccionado = this.videoList[0].url;
        }
        this.cargando = false;
      },
      error => {
        console.log(error);
        this.cargando = false;
      }    )  }
      
  
  createSlug(text: string): string{
    return text
    .toLowerCase()
    .replace(/:/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '');
  }

  generateVideoList(){
    this.videoList = [];
    for(let i=0; i<this.movies.length;i++){
      const slug = this.createSlug(this.movies[i].nombre);
      this.videoList.push({
      nombre: this.movies[i].nombre,
      slug: slug,
      url: this.movies[i].url,
      logo: this.movies[i].logo,
    }); 
    }
  }

  getYouTubeId(url: string): string {
    try {
      const urlObj = new URL(url);
      return urlObj.searchParams.get("v") || '';
    } catch {
      return '';
    }
  }

  getVideo(index: number) {
    const total = this.videoList.length;
    const i = (index + total) % total;
    return this.videoList[i];
  }

  seleccionarVideo(video: any) {
    this.videoSeleccionado = video.url;
  }

  getEmbedUrl(videoUrl: string): SafeResourceUrl {
    const id = this.getYouTubeId(videoUrl);
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${id}`);
  }

  @HostListener('window:keydown', ['$event'])
  handleKey(event: KeyboardEvent) {
    if (event.key === 'ArrowDown') {
      this.index = (this.index + 1) % this.videoList.length;
    } else if (event.key === 'ArrowUp') {
      this.index = (this.index - 1 + this.videoList.length) % this.videoList.length;
    }
    this.videoSeleccionado = this.videoList[this.index].url;
  }

}


