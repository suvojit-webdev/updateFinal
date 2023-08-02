import { CanActivateFn,Router } from '@angular/router';

import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);

  if (sessionStorage.getItem('token') != null) 
    return true;
    else{
      alert("You need to login first to visit the page")
      // this.route.navigate(['/login'])
      router.navigate(['/login']),
      {
        queryParams:{returnUrl:state.url},
      }
    }
  return false;
};
