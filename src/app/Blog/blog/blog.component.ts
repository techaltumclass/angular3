import { Component, OnInit } from "@angular/core";
import { BlogService } from "../blog.service";
import { FormBuilder } from "@angular/forms";
import { Blog } from "../blog.model";
import { Router } from '@angular/router';

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"]
})
export class BlogComponent implements OnInit {
  blogs: Blog[];
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly blogData: BlogService,
    private router:Router
  ) {
    // blogData.getBlogs()
    // window.localStorage.removeItem("blogs")
    console.log(JSON.parse(window.localStorage.getItem("blogs")));
    this.blogs = this.blogData.getBlogs();
  
  }
  gotoDetails(blogid:any){
  this.router.navigate(['/blogDetails/',blogid]);
  console.log(this.blogs)
 
  }

  ngOnInit() {}

  deleteBlog(id){
    this.blogs = this.blogs.filter(data => data.id !== id);
   
    window.localStorage.setItem("blogs", JSON.stringify( this.blogs));
  }
}
