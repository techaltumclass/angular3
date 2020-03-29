import { Component, OnInit, OnChanges, AfterViewInit, AfterContentInit, HostListener, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { BlogService, APIResponse } from '../Blog/blog.service';
import { Blog } from '../Blog/blog.model';
import { BlogComponent } from '../Blog/blog/blog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {


  pageTitle: string;  // just declaration
  myClass: string;
  activeClass: string;
  eventValue: any = 'No event occured.';
  myBlogs: Blog[];
  isAllowed: string;
  isError = false;
  imageUrl = '../../assets/img/services images/pathology.jpg';
  styleName='Pathalogy';

  @ViewChild('titleEl', { static: true }) title: ElementRef;

  ngOnInit() {
    this.getBlogs();
    this.pageTitle = "This is home Page Title. On Init";
    this.isAllowed = 'Y';
    console.log(this.title);
    this.renderer.setStyle(this.title.nativeElement, 'color', '#a8e01f');
  }


  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  constructor(private readonly renderer: Renderer2, private readonly service: BlogService) {

    this.pageTitle = "This is home Page Title.";
    this.myClass = 'active-class';
    this.activeClass = 'my-random-class';
  }

  getBlogs() {
    this.service.getBlogsData()
      .subscribe((res) => {
        console.log(res);
        this.myBlogs = res;
      },
        err => console.log('HTTP Error', err))
  }

  onClickHeading(event) {
    console.log(event.toElement);
    const myElement = event.currentTarget;
    this.renderer.setStyle(myElement, 'color', '#a8e01f');
    this.renderer.setStyle(this.title.nativeElement, 'color', 'white');
  }

  showAlert(event) {
    this.eventValue = event;
    this.pageTitle = 'Page Title after event.';
    this.activeClass = 'class-after-click';
    console.log(event);
  }

}
