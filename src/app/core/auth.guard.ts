import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "../users/user.service";

@Injectable()
export class AuthGuard implements CanActivate {
  isLoggedIn = false;
  constructor(private loggedInService: UserService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let url: string = state.url;
    this.loggedInService.isLoggedIn$.subscribe(val => {
      this.isLoggedIn = val;
    });
    if (!this.isLoggedIn) {
      this.router.navigate(["/login"], {
        queryParams: { returnUrl: state.url }
      });
      return false;
    }

    return true;
  }

  checkLogin(url: string): Observable<boolean> {
    /* if (this.loggedInService.isLoggedIn) {
      return true;
    } else {
      this.loggedInService.redirectUrl = url;
      return false;
    } */
    return this.loggedInService.isLoggedIn$;
  }
}
