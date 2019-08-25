import { Directive,  ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private light:ElementRef) { }
  @HostListener("mouseenter") onMouseEnter(){
    this.lightup("rgba(3, 169, 244, 0.1)");
  }
  @HostListener("mouseleave") onMouseLeave(){
    this.lightup(null);
  }
  private lightup(color:string){
    this.light.nativeElement.style.backgroundColor= color;
  }


}
