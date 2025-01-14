import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-order-history',
  imports: [],
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.css'
})
export class OrderHistoryComponent {

   constructor(private httpClient: HttpClient){}

  user:any[] = []
  book: any= {}

  ngOnInit():void{
    this.getAllOrders()
  }

  apiUrl = "http://localhost:3000/api/v1/";

    //get All list of orders
  getAllOrders(){
  
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
  
      this.httpClient.get(this.apiUrl + "getOrderHis", {headers}).subscribe((result: any) =>{
        this.user = result.data;
        console.log("Order histoy", result.data)
      })
  }




}
