import { CanActivateFn } from '@angular/router';
import { CommonService } from './common/common.service';
import { inject } from '@angular/core';
import { requestmodal } from '../model/request.model';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export const guardGuard: CanActivateFn = (route, state) => {
  const common = inject(CommonService);
  const router = inject(Router);

  const request: requestmodal = {
    url: 'Authentication/validatetoken',
    data: {}
  };
  return common.postData(request).pipe(
    map((response) => {
      if (response.statusCode === 200) {
        return true; 
      } else {
        router.navigate(['']); 
        return false;
      }
    }),
    catchError((error) => {
      console.error('Error validating token:', error);
      router.navigate(['']); 
      return of(false); 
    })
  );
};
