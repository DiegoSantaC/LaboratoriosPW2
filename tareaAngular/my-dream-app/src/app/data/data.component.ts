import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {
  title="Data";
  posts :any[] = [];

  constructor(private dataService: DataService){
    this.dataService.getData().subscribe(data=>{
      this.posts = data;
    })
  }
}
