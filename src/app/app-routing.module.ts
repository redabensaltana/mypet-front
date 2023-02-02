import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PostFormComponent } from './post-form/post-form.component';

const routes: Routes = [
    {path:"", component:PostsComponent},
    {path:'login', component:LoginComponent},
    {path:"register",component:RegisterComponent},
    {path:"create_post",component:PostFormComponent}
  ];
  

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }