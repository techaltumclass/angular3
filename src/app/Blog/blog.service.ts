import { Injectable } from "@angular/core";
import { Blog } from "./blog.model";
import { Title } from "@angular/platform-browser";
import uuidv1 from "uuid/v1";
import { HttpClient } from '@angular/common/http';
import { throwError, fromEvent, of, Observable } from 'rxjs';
import { catchError, tap, switchMap, mergeMap, concatMap, exhaustMap, map } from 'rxjs/operators';

@Injectable()
export class BlogService {
  myvariable: string;
  baseUrl: string = 'https://health-iq.in/api/'
  constructor(private http: HttpClient) { }
  
  submitBlog(blog: Blog): Observable<any> {

    return this.http.post('http://localhost:65114/api/bookings/add', blog);

  }

  getBlogsData(): any {
    return this.http.get(this.baseUrl + 'services/data')
      .pipe(map((x: APIResponse) => {
        console.log(x);
        if (x.IsSuccess)
          return x.SingleResult;
      }),
        catchError(err => {
          console.log('Handling error locally and rethrowing it...', err);
          return throwError(err);
        })
      )
  }

  getBlogsPromise() {
    let apiURL = this.baseUrl + 'services/data';
    return this.http.get(apiURL).toPromise();
  }

  getBlogs(): Blog[] {
    const blogs: Blog[] = [
      {
        id: uuidv1(),
        name: "My First Blog",
        title: "Title",
        description: "descri sdjfhgsdjf dkjfdjkfhsdkjfdjf f dksjf djks fksjfj f",
        subtitle: "sub title",
        createdDate: new Date(),
        createdby: 1,
        thumbnailImageUrl: '../../../assets/img/blog/c1.jpg',
        bannerImageUrl: '../../../assets/img/blog/cat-post/cat-post-3.jpg'
      },
      {
        id: uuidv1(),
        name: "My Second Blog",
        title: "Title",
        description: "descri",
        subtitle: "sub title",
        createdDate: new Date(),
        createdby: 1,
        thumbnailImageUrl: '../../../assets/img/blog/c2.jpg',
        bannerImageUrl: '../../../assets/img/blog/cat-post/cat-post-3.jpg'
      }
    ];

    console.log(blogs);
    window.localStorage.setItem("blogs", JSON.stringify(blogs))
    return blogs;
  }
}


export class APIResponse {
  IsSuccess: boolean;
  Message: string;
  StatusCode: string;
  FailedValidations: any;
  Result: any;
  SingleResult: any;
}