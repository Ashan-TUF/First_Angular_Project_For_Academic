import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {TokenManagerService} from "../services/token-manager.service";

export const authGuard: CanActivateFn = (route, state) => {
  const tokenManagerService = inject(TokenManagerService);
  const router = inject(Router);
  if (tokenManagerService.isExists('access_token')) {
    return true;
  } else {
    router.navigateByUrl('/login');
    alert('you can\'t access the dashboard without a token!')
    return false;
  }
};
