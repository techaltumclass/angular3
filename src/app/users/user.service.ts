import { Injectable } from "@angular/core";
import { user } from "./user.model";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UserService {
  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean> = this.isLoggedIn.asObservable();
  redirectUrl: string;

  constructor(private readonly http: HttpClient) {}

  getUsers(): user[] {
    const users: user[] = [
      {
        username: "adm",
        password: "admin123",
        confirmpassword: "admin123",
        email: "parmanandsingh469@gmail.com",
        mobileno: 7696085020
      }
    ];
    console.log(users);
    window.localStorage.setItem("users", JSON.stringify(users));
    return users;
  }

  login(param: any): Observable<boolean> {
    const users = this.getUsers().filter(
      x => x.username === param.username && x.password === param.password
    );

    if (users) {
      this.isLoggedIn.next(true);
    }

    return this.isLoggedIn$;
  }

  logout(): Observable<boolean> {
    this.isLoggedIn.next(false);
    return this.isLoggedIn$;
  }

  getAllPackages() {
      const appointment = {"name":"dtygu","email":"parmanandsingh469@gmail.com","mobile":"07696085020","age":"12","sex":1,"bookingDate":"2019-12-12T00:00:00.000Z","bookingTime":"drg","doctorID":10,"companyID":1};
    return this.http.post('https://health-iq.in/api/bookings/new-appointment', appointment
    );
  }
}
