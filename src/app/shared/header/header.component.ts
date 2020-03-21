import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  newBlogUrl = '/create-new-blog';
  @Input() blogTitle = 'this is blog title';
  isLoggedIn: boolean;

  constructor(private readonly router: Router) { }

  ngOnInit() {
    this.isLoggedIn = window.localStorage.getItem("isLoggedIn") === 'true' ? true : false;
  }

  logout(): void {
    window.localStorage.setItem("isLoggedIn", 'false');
    window.localStorage.setItem("userID", null);
    this.router.navigate(['/login']);
  }

}
