import { Injectable } from "@angular/core";
import { user } from "./user.model";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UserService {
  isLoggedIn: BehaviorSubject<any> = new BehaviorSubject<any>(false);
  isLoggedIn$: Observable<boolean> = this.isLoggedIn.asObservable();
  redirectUrl: string;
  baseUrl: string = 'http://localhost:65114/api/users/';

  constructor(private readonly http: HttpClient) { }

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

  login(formValue: any): Observable<any> {
    return this.http.post(this.baseUrl + 'login', formValue);
  }

  logout(): Observable<boolean> {
    this.isLoggedIn.next(false);
    return this.isLoggedIn$;
  }

  getAllPackages() {
    const appointment = { "name": "dtygu", "email": "parmanandsingh469@gmail.com", "mobile": "07696085020", "age": "12", "sex": 1, "bookingDate": "2019-12-12T00:00:00.000Z", "bookingTime": "drg", "doctorID": 10, "companyID": 1 };
    return this.http.post('https://health-iq.in/api/bookings/new-appointment', appointment
    );
  }
}
