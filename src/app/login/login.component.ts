import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from './../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // token:any = {}
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  
  constructor(private apiService:ApiService ,private router:Router) {
  }

  ngOnInit(): void {
    if(localStorage.getItem('token'))
      this.router.navigate(['/']);
  }

  onSubmit(){
    console.log(this.loginForm.value.email,this.loginForm.value.password);
    this.apiService.login(this.loginForm.value.email || '',this.loginForm.value.password || '' ).subscribe({
      next: (data:any) => {
        localStorage.setItem('token',data.data.token);
        localStorage.setItem('userId',data.data.userId);
        this.apiService.isLogged = true;
        this.router.navigate(['/']);
      },
      error: error => (alert("incorrect infos"))
    })

  }

}
