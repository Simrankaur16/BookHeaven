import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { BookServiceService } from '../../book-service.service';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-signup',
  imports: [RouterLink, NavbarComponent, FormsModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

   user = {
    username:'', 
    email: '',
    password: '',
    address: ''
   }

   constructor(private bookService: BookServiceService){}

   onSubmit(){
    this.bookService.signup(this.user).subscribe(response =>{
      console.log('signup successful', response);
    })
   }
}
