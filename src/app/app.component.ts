import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, timeInterval } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Blog';

  ngOnInit() {

  
    }
}
