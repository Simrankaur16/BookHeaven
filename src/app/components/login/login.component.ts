import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BookServiceService } from '../../book-service.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router' ;
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-login',
  imports: [NavbarComponent, RouterLink, FormsModule, CommonModule, FooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor (private bookService: BookServiceService, private router: Router) {}

  userObj ={
    username:'',
    password:''
  }

  apiUrl = "https://bookheaven-ch2q.onrender.com/api/v1/";
  url = "/";


  login(){
    this.bookService.onLogin(this.userObj).subscribe((res:any) => {
     if(res.result){
      localStorage.setItem("id", res.id);
      localStorage.setItem("token", res.token);
      localStorage.setItem("role", res.role);

      
       
      this.router.navigateByUrl('/'); 
                  
     }else{
     console.log(console.error)
     }
    })
  }

  


  

}
