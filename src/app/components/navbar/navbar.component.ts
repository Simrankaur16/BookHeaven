import { Component, NgModule } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BookServiceService } from '../../book-service.service';
                    


@Component({
  selector: 'app-navbar',
  imports: [ RouterLink ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  constructor (private bookService: BookServiceService){}

  logOut(){
    this.bookService.logout();
  }


  isLoggedIn(): boolean{
    return this.bookService.hasToken()
  }


              
}
