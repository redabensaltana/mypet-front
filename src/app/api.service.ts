import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders ,HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl : string = 'http://localhost:8080';
//   isActive: boolean = false;
  isLogged: boolean = false;


  readonly httpOptions = {
    headers: new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem('token')}`)
  };

  readonly headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  });

  readonly requestOptions = { headers: this.headers };


  constructor(private http:HttpClient) {
    if(localStorage.getItem('token') == null){
      this.isLogged = false;
    }else
      this.isLogged = true;
  }

  
  login(email:string,password:string): Observable<any>{
    return this.http.post(`${this.baseUrl}/api/auth/login`,{
      email:email,
      password:password
    });
  }

  register(email:string,password:string,address:string,username:string,numberPhone:string): Observable<any>{
    return this.http.post(`${this.baseUrl}/api/auth/register`,{
    email:email,
    password:password,
    address:address,
    username:username,
    numberPhone:numberPhone
    });
  }

  getPosts(){
    return this.http.get(`${this.baseUrl}/api/post/all`,this.requestOptions)
  }
  
  adopt(id:string){
    return this.http.put(`${this.baseUrl}/api/post/adopt/${id}/${localStorage.getItem("userId")}`,this.requestOptions)
  }



//   createPublication(cityy:string,nbJj:string,pricee:string,idAnimall:string): Observable<any>{
//     return this.http.post(`${this.baseUrl}/api/user/create_publication`,{
//       city:cityy,
//       nbJ:nbJj,
//       price:pricee,
//       idAnimal:idAnimall
//     },this.httpOptions);
//   }

//   createComment(messagee:string,idPubb:number):Observable<any>{
//     return this.http.post(`${this.baseUrl}/api/user/create_comment`,{
//       message:messagee,
//       idPub:idPubb
//     },this.httpOptions)
//   }





}