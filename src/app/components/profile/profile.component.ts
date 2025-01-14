import { Component, inject } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import {  RouterLink, RouterLinkActive,RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes';
import { BookServiceService } from '../../book-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  imports: [NavbarComponent, RouterOutlet, RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  constructor(private bookService: BookServiceService, private httpClient: HttpClient){}



  user: any= {}
  apiUrl = "http://localhost:3000/api/v1/";
  
  ngOnInit(){
    this.getUserData()
  }

     

  getUserData(){

    const authToken = localStorage.getItem('token');
    const userId = localStorage.getItem('id');
    const role = localStorage.getItem('role');

    if(!authToken || !userId || !role)
    {
      console.error('User is not auntenticated');
      return;
    }

    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${authToken}`,
      'id': userId
    })

    this.httpClient.get(this.apiUrl + "/getUserInfo", {headers}).subscribe((result:any)=> {
      this.user = result;
      console.log("user data",this.user)
    })
   }

  getFavList(){

  }

  logout(){

    this.bookService.logout()


  }

 


}
