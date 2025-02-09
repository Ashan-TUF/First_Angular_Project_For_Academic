import {Directive, ElementRef, HostListener, Input} from "@angular/core";

@Directive({
  selector: '[appHightlight]',
  standalone: true
})
export class HightlightDirective {
  @Input() highlightColor = 'blue';

  constructor(private _el: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this._el.nativeElement.style.color = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this._el.nativeElement.style.color = 'red';
  }
}
