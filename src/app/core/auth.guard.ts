import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateChild,
  CanDeactivate
} from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "../users/user.service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  isLogg = false;
  constructor(private loggedInService: UserService, private router: Router) { }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    return true;
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let url: string = state.url;
    this.isLogg = window.localStorage.getItem("isLoggedIn") === 'true' ? true : false;
    // this.loggedInService.isLoggedIn$.subscribe(val => {
    //   this.isLogg = val;
    // });
    if (!this.isLogg) {
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
