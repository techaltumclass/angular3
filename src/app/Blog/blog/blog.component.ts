import { Component, OnInit, Input, AfterViewInit } from "@angular/core";
import { BlogService } from "../blog.service";
import { FormBuilder } from "@angular/forms";
import { Blog } from "../blog.model";
import { Router } from '@angular/router';

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"]
})
export class BlogComponent implements OnInit, AfterViewInit {
  blogs: Blog[];
  isViewClick = false;
  childData: any;

  constructor(
    private readonly blogData: BlogService,
    private router: Router
  ) {
    // console.log(JSON.parse(window.localStorage.getItem("blogs")));

  }

  gotoDetails(blogid: any) {
    this.router.navigate(['blogs/blogDetails/', blogid]);
    console.log(this.blogs)

  }

  ngAfterViewInit() {

  }

  ngOnInit() {
    this.blogs = this.blogData.getBlogs();

  }

  openDetails(data) {
    this.isViewClick = true;
    this.childData = data;
  }

  deleteBlog(id) {
    this.blogs = this.blogs.filter(data => data.id !== id);

    window.localStorage.setItem("blogs", JSON.stringify(this.blogs));
  }

  ChildEvent(event) {
    console.log(event);
    // this.isViewClick = false;
  }
}
