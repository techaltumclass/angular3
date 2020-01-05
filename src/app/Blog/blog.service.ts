import { Injectable } from "@angular/core";
import { Blog } from "./blog.model";
import { Title } from "@angular/platform-browser";
import uuidv1 from "uuid/v1";

@Injectable()
export class BlogService {
    myvariable: string;
  constructor() {}

   getBlogs(): Blog[] {
    const blogs: Blog[] = [
      {
        id: uuidv1(),
        name: "New Blog",
        title: "Title",
        description: "descri",
        subtitle: "sub title",
        createdDate: new Date(),
        createdby: 1,
        thumbnailImageUrl: '../../../assets/img/blog/post-img1.jpg',
        bannerImageUrl: '../../../assets/img/blog/cat-post/cat-post-3.jpg'
      },
      {
        id: uuidv1(),
        name: "New Blog",
        title: "Title",
        description: "descri",
        subtitle: "sub title",
        createdDate: new Date(),
        createdby: 1,
        thumbnailImageUrl: '../../../assets/img/blog/feature-img1.jpg',
        bannerImageUrl: '../../../assets/img/blog/cat-post/cat-post-3.jpg'
      }
    ];

    console.log(blogs);
    window.localStorage.setItem("blogs", JSON.stringify(blogs))
    return blogs;
  }
}
