import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserService } from "../user.service";
import { ActivatedRoute, Router } from "@angular/router";
import { APIResponse } from 'src/app/Blog/blog.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  lgForm: FormGroup;
  loading = false;
  submitted = false;
  loginStatus = false;
  pachakges: any;
  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean> = this.isLoggedIn.asObservable();
  constructor(
    private readonly formbuilder: FormBuilder,
    private readonly router: Router,
    private readonly service: UserService
  ) {
    this.getPackages();
  }

  ngOnInit() {

    this.lgForm = this.formbuilder.group({
      email: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }
  get fval() {
    return this.lgForm.controls;
  }

  submitLoginForm() {
    this.submitted = true;
    if (this.lgForm.invalid) {
      return;
    }
    this.service.login(this.lgForm.value).subscribe((res:APIResponse) => {
      if(res.IsSuccess){
        this.isLoggedIn.next(true);
        window.localStorage.setItem("isLoggedIn", 'true');
        window.localStorage.setItem("userID", res.SingleResult.ID);
      } else {
        window.localStorage.setItem("isLoggedIn", 'false')
      }
      this.router.navigateByUrl("/");
    })
  }

  getPackages() {
    this.service.getAllPackages().subscribe((res: any) => {
      console.log(res);
      this.pachakges = res.SingleResult;
    });
  }
}
