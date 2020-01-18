import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pageTitle: string;  // just declaration
  myClass: string;
  activeClass: string;
  eventValue : any = 'No event occured.';
  constructor() {
    this.pageTitle = "This is home Page Title.";
    this.myClass = 'active-class';
    this.activeClass = 'my-random-class';
  }

  ngOnInit() {
  }

  showAlert(event) {
    this.eventValue = event;
    this.pageTitle = 'Page Title after event.';
    this.activeClass = 'class-after-click';
    console.log(event);
  }

}
