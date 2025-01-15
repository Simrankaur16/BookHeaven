import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { HttpClient } from '@angular/common/http';
import { RouterLink, RouterOutlet } from '@angular/router';
import {Router} from '@angular/router';
import { FooterComponent } from "../footer/footer.component";




@Component({
  selector: 'app-all-books',
  imports: [NavbarComponent, RouterOutlet, RouterLink, FooterComponent],
  templateUrl: './all-books.component.html',
  styleUrl: './all-books.component.css'
})
export class AllBooksComponent {

  constructor(private httpClient:HttpClient) {}

  books: any[]=[];
 apiUrl = "https://bookheaven-ch2q.onrender.com/api/v1/";

 getRecentBooks(){
  this.httpClient.get(this.apiUrl+"getAllBooks").subscribe((result: any)=>{
    this.books = result.data;
    console.log("done", result);
  })

}

ngOnInit()
{
  this.getRecentBooks();

}


}
