import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { BookServiceService } from '../../book-service.service';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-signup',
  imports: [RouterLink, NavbarComponent, FormsModule, CommonModule, FooterComponent],
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

  route = inject(Router)

   constructor(private bookService: BookServiceService){}

   onSubmit(){
    try{
    this.bookService.signup(this.user).subscribe(response =>{
      console.log('signup successful', response);
      this.route.navigateByUrl("/login");

    })
  }catch(error){
    alert("Invalid Credential")
  }
   }
}
