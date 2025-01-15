import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-add-book',
  imports: [ FormsModule, CommonModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
  constructor(private http : HttpClient){}


apiUrl = "http://localhost:3000/api/v1/";

book = {
  url:'', 
  title: '',
  author: '',
  price: '',
  description: '',
  language:''
 }

 onSubmit() {
  const authToken = localStorage.getItem('token');
  const userId = localStorage.getItem('id');
  const role = localStorage.getItem('role')

  if (!authToken || !userId || !role) {
    console.error('User is not authenticated!');
    return;
  }

  const headers = new HttpHeaders({
        'Authorization': `Bearer ${authToken}`,
         'id':userId,

      })

  this.http.post(this.apiUrl + "add-book",this.book, {headers})
   .subscribe((result)=>{
   console.log("Book Added Successfully",result);
       alert("Book Added Successfully");
})  
  }

}
