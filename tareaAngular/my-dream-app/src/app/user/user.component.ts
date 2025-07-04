import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{
  @Input() nameUser:any;

  constructor(){
    this.nameUser=this.nameUser+"ELPRO";
  }
  
  ngOnInit(): void {
  }

}
