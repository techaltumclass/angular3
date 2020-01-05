import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {

  blogDetail: {};
  blogs: Array<any> ;

  constructor(private activatedRoute: ActivatedRoute) {
    this.blogs = JSON.parse(window.localStorage.getItem("blogs"));
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe(paramsId => {
      if(paramsId.id) {
        this.blogs= this.blogs.filter(data => data.id === paramsId.id);
        if(this.blogs.length) {
          this.blogDetail=this.blogs[0];
        }
      }
    })
  }

}
