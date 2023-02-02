import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from './../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // token:any = {}
  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    address: new FormControl(''),
    username: new FormControl(''),
    numberPhone: new FormControl('')
  });

  
  constructor(private apiService:ApiService ,private router:Router) {
  }

  onSubmit(){
    this.apiService.register(this.registerForm.value.email || '',this.registerForm.value.password || '' , this.registerForm.value.address || '' , this.registerForm.value.username || '',this.registerForm.value.numberPhone || '').subscribe({
      next: (data:any) => {
        localStorage.setItem('token',data.data.token);
        localStorage.setItem('userId',data.data.userId);
        this.apiService.isLogged = true;
        this.router.navigate(['/']);
      },
      error: error => (alert("email exists, change your email!"))
    })

  }

}