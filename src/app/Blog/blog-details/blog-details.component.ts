import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent {

  @Input('data-parent') blogDetail: any;
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
