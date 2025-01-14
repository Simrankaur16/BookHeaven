import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { HttpClient } from '@angular/common/http';
import { RouterLink, RouterOutlet } from '@angular/router';
import {Router} from '@angular/router';




@Component({
  selector: 'app-all-books',
  imports: [NavbarComponent, RouterOutlet, RouterLink],
  templateUrl: './all-books.component.html',
  styleUrl: './all-books.component.css'
})
export class AllBooksComponent {

  constructor(private httpClient:HttpClient) {}

  books: any[]=[];
 apiUrl = "http://localhost:3000/api/v1/";

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
