import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {Router} from '@angular/router';


@Component({
  selector: 'app-recent-added',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './recent-added.component.html',
  styleUrl: './recent-added.component.css'
})
export class RecentAddedComponent {
  constructor(private httpClient:HttpClient) { }



 books: any[]=[];
 apiUrl = "http://localhost:3000/api/v1/";

 getRecentBooks(){
  this.httpClient.get(this.apiUrl+"getRecentBooks").subscribe((result: any)=>{
    this.books = result.data;
    // console.log("done", result);
  })

}

ngOnInit()
{
  this.getRecentBooks();

}

}


