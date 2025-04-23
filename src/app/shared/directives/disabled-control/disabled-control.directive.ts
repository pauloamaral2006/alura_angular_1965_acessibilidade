import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: 'appDisabledControl',
})
export class DisabledControlDirective implements OnChanges {
  @Input() appDisabledControl = false;

  constructor(private ngControl: NgControl) {}
  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.appDisableControl) {
      const action = this.appDisabledControl ? 'disabled' : 'enable';
      this.ngControl.control[action]();
    }
  }
}
