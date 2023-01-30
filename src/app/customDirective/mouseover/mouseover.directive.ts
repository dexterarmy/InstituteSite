import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMouseover]'
})
export class MouseoverDirective {

  constructor(private element: ElementRef,private renderer: Renderer2) { }

}
