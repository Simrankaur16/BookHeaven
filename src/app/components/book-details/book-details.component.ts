import { Component,inject,OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavbarComponent } from "../navbar/navbar.component";
import { ActivatedRoute } from '@angular/router';
import { BookServiceService } from '../../book-service.service';

@Component({
  selector: 'app-book-details',
  imports: [NavbarComponent],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {

  constructor(private httpClient: HttpClient, private bookService: BookServiceService){}

 books: any= {title:''};
 user: any = {};
 route = inject(ActivatedRoute)
 
  apiUrl = "http://localhost:3000/api/v1/";
  ngOnInit(): void
  {
    const id = this.route.snapshot.params["id"];
    this.getBookById(id);
  }


  addToCart(bookid:string)
  {
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


    this.httpClient.put<any>(this.apiUrl + "/addToCart",{},{headers}).subscribe((result)=> {
            
      this.books = result;
      alert("Book Added To Cart")

      console.log("Book fetc", this.books)
    })

  }


  addToFav(bookid:string){

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

    this.httpClient.put<any>(this.apiUrl + "/addBookFav", {}, {headers}).subscribe((result) => {
      this.books = result;
      alert("Books Addded to Favorites")
      console.log("Book Fave", this.books)
    })


  }

  getBookById(id:string){
    this.httpClient.get<any>(this.apiUrl+"getBookById/" +id).subscribe((result)=>{
      this.books = result;
      console.log("Book fetc", this.books)
      // console.log("done", this.books);
  })
  }

  remove(bookid:string){

    const userId = localStorage.getItem('id');
    const role = localStorage.getItem('role')

    if (!userId || !role) {
      console.error('User is not authenticated!');
      return;
    }

    const headers = new HttpHeaders({
      'bookid': bookid,
      'id':userId

    })

    this.httpClient.delete(this.apiUrl + "/deleteBook", {headers}).subscribe((result) => {
        this.books = result;
        alert("Books is Deleted")
        console.log("Book deletee", this.books)
      })
  

    


  }

  edit(id:string){

  }

    
    logOut(){
      this.bookService.logout();
    }
  
  
    isLoggedIn(): boolean{
      return this.bookService.hasToken()
    }

  

 
}
