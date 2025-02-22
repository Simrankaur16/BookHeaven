import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/main/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { SignupComponent } from './components/signup/signup.component';
import { CartComponent } from './components/cart/cart.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FavouritesComponent } from './components/profile/favourites/favourites.component';
import { roleGuard } from './guards/role.guard';
import { RenderMode } from '@angular/ssr';




export const routes: Routes = [
    
    {
        path:'',
       
        loadComponent: () => import('./components/main/dashboard/dashboard.component')
        .then((c)=> c.DashboardComponent),
        pathMatch: 'full'
    },
    {
        path:'login',
       
        loadComponent: () => import('./components/login/login.component')
        .then((c)=> c.LoginComponent)

    },
    {
        path:'all-books',
        
        loadComponent: () => import('./components/all-books/all-books.component')
        .then((c) => c.AllBooksComponent)          
    },
    {
        path:'sign-up',
        
        loadComponent: () => import('./components/signup/signup.component')
        .then((c)=>c.SignupComponent)
            
    },
 
   {
    path: 'profile',
   
  
    loadComponent:()=> import('./components/profile/profile.component')
    .then((c)=> c.ProfileComponent),
    
    
    children:
    [
        {
            path:'',
            redirectTo: 'favourites',
            pathMatch: 'full',

        },
        {
          path:'favourites',
           
          
          loadComponent: () => import('./components/profile/favourites/favourites.component')
          .then((c)=> c.FavouritesComponent),
          
        },
        {
            path:'addBook',
            canActivateChild:[roleGuard],
           
            loadComponent: () => import('./components/profile/add-book/add-book.component')
            .then((c) => c.AddBookComponent),
            data:{role:['admin']},
        }

     ]
    },

    {
        path:'cart',
        title: 'Cart',
        loadComponent:() => import('./components/cart/cart.component')
        .then((c)=> c.CartComponent),
    },
    {
        path: 'viewBookDetails/:id',
        title:'Book Details',
        data: {RenderMode: 'browser'},
        loadComponent:() => import('./components/book-details/book-details.component')
        .then((c) => c.BookDetailsComponent),
       
        
    },
    {
            
        path: 'edit-book/:id',
        title: 'Edit Book',
        loadComponent:() => import('./components/edit-book/edit-book.component')
        .then((c)=>c.EditBookComponent),
       
    
   }
   
    
];
