import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logged : boolean = this.apiService.isLogged;

  constructor(private apiService:ApiService,private router:Router){
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
