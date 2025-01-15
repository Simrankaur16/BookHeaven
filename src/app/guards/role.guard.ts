import { inject } from '@angular/core';
import { CanActivateChildFn } from '@angular/router';
import { BookServiceService } from '../book-service.service';

export const roleGuard: CanActivateChildFn = (childRoute, state) => {
 
  const auth = inject(BookServiceService);
  const requireRole = childRoute.data['role'];

  if(auth.hasRole(requireRole)){
    return true;

  }else {
    auth.navigateByUrl('/');
    return false;
  }
};
