import { Component, OnInit } from "@angular/core";
import uuidv1 from "uuid/v1";
import {
  FormsModule,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  NgModel
} from "@angular/forms";
import { BlogService } from "../blog.service";
import { Blog } from "../blog.model";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-create-blog",
  templateUrl: "./create-blog.component.html",
  styleUrls: ["./create-blog.component.scss"]
})
export class CreateBlogComponent implements OnInit {
  myblogForm: FormGroup;
  blogs: Blog[];
  dummy: Array<any>;
  update: boolean;
  blogName: string;
  model: NgModel;
  id: string;
  submitted = false;
  value: any;
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly service: BlogService,
    private activatedRoute: ActivatedRoute
  ) {
    this.blogs = JSON.parse(window.localStorage.getItem("blogs"));
  }

  ngOnInit() {
    this.createForm();
    this.activatedRoute.params.subscribe(paramsId => {
      // this.id = paramsId.id;
      if (paramsId.id) {
        this.dummy = this.blogs.filter(data => data.id === paramsId.id);
        if (this.dummy.length) {
          this.update = true;
          this.dummy.map(data => {
            this.myblogForm.patchValue({ ...data });
          });
        }
      }
    });
    console.log(this.id);
  }

  getTextValue(event){
    this.value = event;
  }

  createForm() {
    this.myblogForm = this.formBuilder.group({
      id: [uuidv1(), [Validators.required]],
      name: ["", Validators.required],
      title: ["", Validators.required],
      subtitle: ["", Validators.required],
      createdDate: [""],
      description: ["", Validators.required],
      thumbnailImageUrl: [""],
      bannerImageUrl: [""],
      createdby: [""]
    });
  }

  changeValue(event){
    this.myblogForm.patchValue({title: 'new title'});
  }

  get f(): any {
    return this.myblogForm.controls;
  }
  
  // code for upload dynamic image.
  showPreview(e) {
    const file = (e.target as HTMLInputElement).files[0];

    const reader = new FileReader();
    reader.onload = () => {
      var imageURL = reader.result as string;
      this.myblogForm.patchValue({
        [e.target.name]: imageURL
      });
      this.myblogForm.get(e.target.name).updateValueAndValidity();
    };
    reader.readAsDataURL(file);
  }

  createNewBlog() {
    this.submitted = true;

    if (this.myblogForm.invalid) {
      return;
    }

    // alert("SUCCESS!!:-)\n\n" + JSON.stringify(this.myblogForm.value, null, 4));
    //this.blogs.push(this.myblogForm.value);
    this.service.submitBlog(this.myblogForm.value)
    .subscribe((res: any) => {
      console.log(res);
    });
    window.localStorage.setItem("blogs", JSON.stringify(this.blogs));
  }



  updateBlog() {
    if (this.myblogForm.invalid) {
      return;
    }
    let updatedData = this.blogs.map(data => {
      if (data.id === this.myblogForm.value.id) {
        return {
          ...this.myblogForm.value
        };
      }
      return data;
    });
    window.localStorage.setItem("blogs", JSON.stringify(updatedData));
  }

  resetData() {
    this.myblogForm.reset();
  }
}
