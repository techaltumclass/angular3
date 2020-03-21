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
  retUrl: string;
  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean> = this.isLoggedIn.asObservable();
  constructor(
    private readonly formbuilder: FormBuilder,
    private readonly router: Router,
    private readonly service: UserService,
    private activatedRoute: ActivatedRoute
  ) {
    this.getPackages();
  }

  ngOnInit() {
    this.activatedRoute.queryParamMap
      .subscribe(params => {
        this.retUrl = params.get('retUrl');
      });

    this.lgForm = this.formbuilder.group({
      email: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(6)]],
      companyID: [2]
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
    this.lgForm.patchValue({ companyID: 2 });
    this.service.login(this.lgForm.value).subscribe((res: APIResponse) => {
      if (res.IsSuccess) {
        this.isLoggedIn.next(true);
        window.localStorage.setItem("isLoggedIn", 'true');
        window.localStorage.setItem("userID", res.SingleResult.ID);
        this.router.navigate(['/blogs']);
      } else {
        window.localStorage.setItem("isLoggedIn", 'false')
        return;
      }
    })
  }

  getPackages() {
    this.service.getAllPackages().subscribe((res: any) => {
      console.log(res);
      this.pachakges = res.SingleResult;
    });
  }
}
