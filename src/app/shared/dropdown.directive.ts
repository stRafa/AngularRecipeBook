import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') opened : boolean = false;
  constructor(private elRef: ElementRef) { }

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.opened = this.elRef.nativeElement.contains(event.target) ? !this.opened : false;
  }
}
