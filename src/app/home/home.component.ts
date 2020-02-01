import { Component, OnInit, OnChanges, AfterViewInit, AfterContentInit, HostListener } from '@angular/core';
import { BlogService } from '../Blog/blog.service';
import { Blog } from '../Blog/blog.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ngOnInit() {
    this.pageTitle = "This is home Page Title. On Init";
    console.log('ngOnInit');
  }

  // ngOnChanges(): void {
  //   console.log('ngOnChanges');
  // }

  // ngAfterViewInit(): void {
  //   this.pageTitle = "This is home Page Title. After View Init";
  //   // this.isAllowed = 'Y';
  //   console.log('ngAfterViewInit');
  // }

  // ngAfterContentInit(): void {
  //   console.log('ngAfterContentInit');
  // }



  pageTitle: string;  // just declaration
  myClass: string;
  activeClass: string;
  eventValue: any = 'No event occured.';
  myBlogs: Blog[];
  isAllowed: string;
  
  constructor(private service: BlogService) {

    this.myBlogs = service.getBlogs();
    this.isAllowed = 'Y';
    console.log('constructor called Home.');
    this.pageTitle = "This is home Page Title.";
    this.myClass = 'active-class';
    this.activeClass = 'my-random-class';
  }

  showAlert(event) {
    this.eventValue = event;
    this.pageTitle = 'Page Title after event.';
    this.activeClass = 'class-after-click';
    console.log(event);
  }

}
