import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserService } from "../user.service";
import { ActivatedRoute, Router } from "@angular/router";

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
  constructor(
    private readonly formbuilder: FormBuilder,
    private readonly router: Router,
    private readonly service: UserService
  ) {
    this.getPackages();
  }

  ngOnInit() {
    
    this.lgForm = this.formbuilder.group({
      username: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }
  get fval() {
    return this.lgForm.controls;
  }

  loginForm() {
    this.submitted = true;
    if (this.lgForm.invalid) {
      return;
    }
    if (this.service.login(this.lgForm.value)) {
      this.router.navigateByUrl("/home");
    }
  }

  getPackages() {
    this.service.getAllPackages().subscribe((res: any) => {
      console.log(res);
      this.pachakges = res.SingleResult;
    });
  }
}
