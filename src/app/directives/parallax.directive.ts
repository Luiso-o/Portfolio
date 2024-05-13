import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appParallax]',
  standalone: true
})
export class ParallaxDirective {
  @Input('ratio') parallaxRatio: number = 1;

  constructor(private eleRef: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    const offset = window.scrollY;
    this.eleRef.nativeElement.style.transform = `translateY(${offset * this.parallaxRatio}px)`;
  }
}
