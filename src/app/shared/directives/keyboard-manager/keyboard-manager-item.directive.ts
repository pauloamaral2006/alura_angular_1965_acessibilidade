import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appKmItem]',
})
export class KeyBoardManagerItemDirective {
  @Output() public focused = new EventEmitter<void>();
  constructor(private elementRef: ElementRef<HTMLElement>) {}

  public focus(): void {
    this.elementRef.nativeElement.focus();
    this.focused.emit();
  }

  public isFocused(): boolean {
    return this.elementRef.nativeElement === document.activeElement;
  }
}
