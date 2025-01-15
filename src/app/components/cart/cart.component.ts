import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-cart',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  constructor(private httpClient: HttpClient){}

  ngOnInit():void{
    this.getCarList()
  }


  user: any[] =  [];
  book: any = {}
  cart: any[] = [];


  apiUrl = "http://localhost:3000/api/v1/";

  getCarList(){
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

    this.httpClient.get(this.apiUrl + "/getUserCart", {headers}).subscribe((result:any)=>{
      this.user = result.data;
      console.log("user data", this.user)

    
    })
   }

   removeBook(bookid:string) {
    const authToken = localStorage.getItem('token');
    const userId = localStorage.getItem('id');
    const role = localStorage.getItem('role');

    if (!authToken || !userId || !role) {
      console.error('User is not authenticated!');
      return;
    }
    this.user = this.user.filter(item => item._id !== bookid);


    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`,
       'id':userId
    })

    this.httpClient.put<any>(this.apiUrl+"remBookCart/"+bookid,{}, {headers}).subscribe((result)=>{
      this.book = result;
      console.log("Book Fetc", this.book)


  
    })
    

    }



    //place order
     placeOrder(bookid:string){

      const authToken = localStorage.getItem('token');
      const userId = localStorage.getItem('id');

      const role = localStorage.getItem('role');

     if(!authToken || !userId || !role) {
              console.error('User is not authenticated!');
             return;
      }

      

      

      const headers = new HttpHeaders({
        'Authorization': `Bearer ${authToken}`,
        'id': userId
      });

      const order = this.cart.map(item => ({bookid: item._id}))

      this.httpClient.post<any>(this.apiUrl+ "/placeOrder", {order}, {headers}).subscribe((result) =>{
        console.log("done", result);
        if(result.status === "Success"){
          
        alert("Order is Placed");
        
       
      }else{
        alert("Order placement failed: " + result.message);
      }

      })
  
      
    }




    
    
      

    }










