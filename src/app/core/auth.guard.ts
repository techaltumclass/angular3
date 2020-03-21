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

  checkLoginStatus(): boolean {
    return window.localStorage.getItem("isLoggedIn") === 'true' ? true : false;
    // this.loggedInService.isLoggedIn$.subscribe(res => {
    //   return res;
    // })
    // return false;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    return this.checkLoginStatus();
  }

  canLoad(route: import("@angular/router").Route, segments: import("@angular/router").UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    return this.checkLoginStatus();
  }


  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let url: string = state.url;
    this.loggedInService.isLoggedIn$.subscribe(res => {
      this.isLogg = res;
    })
    // this.isLogg = window.localStorage.getItem("isLoggedIn") === 'true' ? true : false;
    if (!this.isLogg) {
      this.router.navigate(["/login"], {
        queryParams: { returnUrl: url }
      });
      return this.isLogg;
    }

    return this.isLogg;
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
