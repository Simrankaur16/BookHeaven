import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { Router } from '@angular/router' ;

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private http:HttpClient, private router: Router){}

  apiUrl = "https://bookheaven-ch2q.onrender.com/api/v1/";

  signup(user:any):Observable<any> {
    return this.http.post(this.apiUrl + "signup", user);
  }


  //sign-in

  onLogin(obj:any):Observable<any>{
    return this.http.post(this.apiUrl + "sign-in",obj)
  }

  hasToken(): boolean {
    return !!localStorage.getItem('token');
  }
           
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('role');
    alert("User is Logout");
    this.router.navigateByUrl("/");
    


  }


  hasRole(role:'user' | 'admin'):boolean{
    const storedRole = localStorage.getItem('role');
    return storedRole === role;
  }

  navigateByUrl(url: string):void  
  {
  this.router.navigateByUrl(url, {replaceUrl: true})
  }



}
