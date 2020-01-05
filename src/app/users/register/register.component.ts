import { Component, OnInit } from "@angular/core";
import { from } from "rxjs";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../user.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  regForm: FormGroup;
  submitted = false;
  loading = false;
  constructor(
    private readonly frombuilder: FormBuilder,
    private readonly registerData: UserService
  ) {}

  ngOnInit() {
    this.regForm = this.frombuilder.group({
      username: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmpassword: ["", Validators.required],
      email: ["", Validators.required, Validators.email],
      mobileno: ["", [Validators.required, Validators.minLength(10)]]
    });
  }
  get fval() {
    return this.regForm.controls;
  }
  registration() {
    this.submitted = true;
    if (this.regForm.invalid) {
    }
    alert("SUCCESS!!:-)\n\n" + JSON.stringify(this.regForm.value, null, 4));
  }
}
