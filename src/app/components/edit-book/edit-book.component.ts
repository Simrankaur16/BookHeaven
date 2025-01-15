import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-book',
  imports: [FormsModule, CommonModule, NavbarComponent],
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.css'
})
export class EditBookComponent {

  constructor(private http : HttpClient){}

    
  private route = inject(ActivatedRoute)
  bookid! : string;

  ngOnInit(): void
  {
    this.bookid = this.route.snapshot.params["id"];
    this.getBookById(this.bookid)
  }
  

  
  apiUrl = "https://bookheaven-ch2q.onrender.com/api/v1/";
  
  book = {
    url:'', 
    title: '',
    author: '',
    price: '',
    description: '',
    language:''
   }

  
   getBookById(id:string){
    this.http.get<any>(this.apiUrl+"getBookById/" +id).subscribe((result)=>{
      this.book = result.data;
      console.log("Book fetc by id", this.book)
      // console.log("done", this.books);
  })
  }




   edit(bookid:string){


    const authToken = localStorage.getItem('token');
    const userId = localStorage.getItem('id');
    const role = localStorage.getItem('role')
    
    if (!authToken || !userId || !role) {
      console.error('User is not authenticated!');
      return;
    }

    //setting headers to retrieved values

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`, //seding auth token
      'bookid': bookid,
      'id':userId

    })

    this.http.put<any>(this.apiUrl+"update-book",this.book, {headers})
    .subscribe((result) =>{
      console.log("Book Updated", result);
      alert("book updated Sucessfully")
    })




   }

}
