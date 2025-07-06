import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SlugPipe } from '../slug.pipe';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [CommonModule, SlugPipe],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent {
  title= "Peliculas";
  videoList: { name: string, slug: string, url: string }[] = [];
  names: string[];
  urls: string[];

  constructor(private sanitizer: DomSanitizer){
    this.names=["Avengers:InfinityWar","Thor:Ragnarok","Avengers:EndGame","Spider-man: No way home"];
    this.urls=[
      "https://www.youtube.com/watch?v=823iAZOEKt8",
      "https://www.youtube.com/watch?v=ue80QwXMRHg",
      "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      "https://www.youtube.com/watch?v=JfVOs4VSpmA",
    ]

    this.generateVideoList();
  }
  
  generateVideoList(){
    this.videoList = [];
    for(let i=0;i<this.names.length;i++)
      this.videoList.push({
        name: this.names[i],
        slug: this.createSlug(this.names[i]),
        url: this.urls[i],
      });
  }

  createSlug(text: string): string{
    return text
    .toLowerCase()
    .replace(/:/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '');
  }

  getYouTubeId(url: string): string {
    try {
      const urlObj = new URL(url);
      return urlObj.searchParams.get("v") || '';
    } catch {
      return '';
    }
  }

  getEmbedUrl(videoUrl: string): SafeResourceUrl {
    const id = this.getYouTubeId(videoUrl);
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${id}`);
  }

  addPeli(namePeli:any, urlPeli:any){
    this.names.push(namePeli.value);
    this.urls.push(urlPeli.value)
    namePeli.value='';
    namePeli.focus();
    urlPeli.value='';
    urlPeli.focus();
    this.generateVideoList();
    return false;
  }

  deletePeli(video:any){
    for(let i=0; i<this.videoList.length; i++)
      if(video==this.videoList[i].name)
        this.videoList.splice(i,1);
  }
}
