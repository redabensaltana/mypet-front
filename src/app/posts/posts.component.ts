import { Component } from '@angular/core';
import { ApiService } from './../api.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})


export class PostsComponent {
  posts:any;
  check : boolean = this.apiService.isLogged;

  ngOnInit(): void {
    console.log(localStorage.getItem('token'));
    
    if(!localStorage.getItem('token')){
      this.router.navigate(['/login']);
      return;}
      else{ 
        this.getPosts();
      }
  }

  getPosts(){
    this.apiService.getPosts().subscribe({
      next: (data:any) => {
        console.log(data);
        this.posts = data.data.posts;
      },
      error: error => (alert("no data available"))
    });
  }

  adopt(id:string){
    console.log(id,"hiiiiiiiiiiiii");
    
    this.apiService.adopt(id).subscribe({
      next: (data:any) => {
        console.log(data);
        this.posts = data.data.posts;
      },
      error: error => (alert("something went wrong"))
    });
  }
  

  constructor(private apiService:ApiService, private router:Router){
  }
}
