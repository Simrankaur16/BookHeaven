import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {Router} from '@angular/router';
import { FooterComponent } from "../footer/footer.component";


@Component({
  selector: 'app-recent-added',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './recent-added.component.html',
  styleUrl: './recent-added.component.css'
})
export class RecentAddedComponent {
  constructor(private httpClient:HttpClient) { }



 books: any[]=[];
 apiUrl = "https://bookheaven-ch2q.onrender.com/api/v1/";

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


