import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  newBlogUrl = '/create-new-blog';

  constructor(private readonly router: Router) { }

  ngOnInit() {
  }

  onClick(): void {
    console.log('clicked.')
    this.router.navigate(['/create-new-blog']);
  }

}
