import { Directive, OnInit, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClickMessage]'
})
export class ClickMessageDirective implements OnInit {

  constructor(private readonly el: ElementRef, private readonly renderer: Renderer2) {
    console.log('Directive Called!');
  }

  @HostListener('mouseover', ['$event.target'])
  onClick(event) {

    console.log('element: ', this.el.nativeElement);
    const myElement = this.el.nativeElement;

    const currentColor = this.el.nativeElement.style.color;

    if (currentColor === 'rgb(168, 224, 31)') {
      this.renderer.setStyle(myElement, 'color', 'white');
    } else {
      this.renderer.setStyle(myElement, 'color', '#a8e01f');
    }


  }

  ngOnInit() {
    console.log('#a8e01f');
  }

}
