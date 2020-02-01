import { Directive, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickMessage]'
})
export class ClickMessageDirective implements OnInit {

  constructor() {
    console.log('Directive Called!');
  }

@HostListener('click', ['$event.target'])
onClick(btn) {
  console.log('button', btn);
}

ngOnInit() {
  console.log('Directive ngOnInit Called!');
}

}
