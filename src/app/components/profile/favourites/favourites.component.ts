import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-favourites',
  imports: [ RouterLink],
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.css'
  
})
export class FavouritesComponent {

  
    constructor(private httpClient: HttpClient){}

    user:any[] = []
    book: any= {}

    ngOnInit():void{
      this.getFavBooks()
    }

    apiUrl = "https://bookheaven-ch2q.onrender.com/api/v1/";

    getFavBooks(){

    const authToken = localStorage.getItem('token');
    const userId = localStorage.getItem('id');
    const role = localStorage.getItem('role')

    if (!authToken || !userId || !role) {
      console.error('User is not authenticated!');
      return;
    }


    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`,
      'id':userId

    })

    this.httpClient.get(this.apiUrl + "getFavBook", {headers}).subscribe((result: any) =>{
      this.user = result.data;
      console.log("fav book", this.user)
    })
  }


  //remove book from favorite

  removeFav(bookid:string){

    const authToken = localStorage.getItem('token');
    const userId = localStorage.getItem('id');
    const role = localStorage.getItem('role');


    if (!authToken || !userId || !role) {
      console.error('User is not authenticated!');
      return;
    }
    this.user = this.user.filter(item => item._id !== bookid);

    const headers = new HttpHeaders({
      'bookid':bookid,
      'Authorization': `Bearer ${authToken}`,
       'id':userId
    })

    // remBookFav

    this.httpClient.put<any>(this.apiUrl + "remBookFav" ,{}, {headers})
      .subscribe((result)=>{
        this.book = result;
        console.log("Book is Revomed form fav", this.book);
      })






  }


}
