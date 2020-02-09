import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../blog.model';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent {

  @Input('data-bind') blogDetail: Blog;
  @Output() childEvent: EventEmitter<any> = new EventEmitter<any>();

  blogs: Array<any>;

  constructor(private activatedRoute: ActivatedRoute) {
    this.blogs = JSON.parse(window.localStorage.getItem("blogs"));
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(paramsId => {
      if (paramsId.id) {
        this.blogs = this.blogs.filter(data => data.id === paramsId.id);
        if (this.blogs.length) {
          this.blogDetail = this.blogs[0];
        }
      }
    })
  }

  clickImage(){
    console.log('Image Clicked: ' + event.target);
    this.childEvent.emit(this.blogDetail);
  }

}
