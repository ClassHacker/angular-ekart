import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight-text]'
})

export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') 
  onMouseEnter() {
        this.el.nativeElement.style.backgroundColor = "blue";
  }

  @HostListener('mouseleave') 
  onMouseLeave() {
     this.el.nativeElement.style.backgroundColor = "white";
  }
}