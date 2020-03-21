import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateChild,
  CanDeactivate,
  CanLoad
} from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "../users/user.service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  isLogg = false;
  constructor(private loggedInService: UserService, private router: Router) { }

  canLoad(route: import("@angular/router").Route, segments: import("@angular/router").UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    return true;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    return true;
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let url: string = state.url;
    this.isLogg = window.localStorage.getItem("isLoggedIn") === 'true' ? true : false;
    if (!this.isLogg) {
      this.router.navigate(["/login"], {
        queryParams: { returnUrl: url }
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
