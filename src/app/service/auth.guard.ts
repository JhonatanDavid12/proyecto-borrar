import { CanActivateFn, Router } from '@angular/router';
import { inject } from "@angular/core";
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import {AuthService} from "./auth.service";

// 1 paso
export const authGuard: CanActivateFn = (route,  state) => {

  // 2 paso
  const authService = inject(AuthService);
  const router = inject(Router);

  // 3 paso
  return authService.isAuthenticated().pipe(

    // 4 paso
    map(isAuth => {
      if (isAuth) {
        return true;
      } else {
        router.navigate(['/login']);
        return false;
      }
    }),

    // 5 paso
    catchError(() => {
      router.navigate(['/login']);
      return of(false);
    })
  );
};
