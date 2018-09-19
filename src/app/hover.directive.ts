import {Directive, HostBinding, HostListener} from "@angular/core";

@Directive({
  selector:'[appHover]'
})
export  class HoverDirective {

  @HostBinding('class.hoverCard') isHovered = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.isHovered = true;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.isHovered = false;

  }
}
