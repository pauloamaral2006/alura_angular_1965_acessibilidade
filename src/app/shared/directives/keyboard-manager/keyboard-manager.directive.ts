import { KeyBoardManagerItemDirective } from './keyboard-manager-item.directive';
import {
  ContentChildren,
  Directive,
  HostListener,
  QueryList,
} from '@angular/core';

@Directive({
  selector: '[appKm]',
})
export class KeyBoardManagerDirective {
  @ContentChildren(KeyBoardManagerItemDirective)
  public items: QueryList<KeyBoardManagerItemDirective> = null;
  @HostListener('keyup', ['$event'])
  public manageKeys(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowUp':
        console.log('up');
        this.moveFocus(ArrowDirection.RIGHT).focus();
        break;
      case 'ArrowDown':
        console.log('down');
        this.moveFocus(ArrowDirection.LEFT).focus();
        break;
      case 'ArrowLeft':
        console.log('left');
        this.moveFocus(ArrowDirection.LEFT).focus();
        break;
      case 'ArrowRight':
        console.log('right');
        this.moveFocus(ArrowDirection.RIGHT).focus();
        break;
    }
  }

  public moveFocus(direction: ArrowDirection): KeyBoardManagerItemDirective {
    const items = this.items.toArray();
    const currentSelectedIndex = items.findIndex((item) => item.isFocused());
    const targetElementFocus = items[currentSelectedIndex + direction];

    if (targetElementFocus) {
      return targetElementFocus;
    }

    return direction === ArrowDirection.LEFT
      ? items[items.length - 1]
      : items[0];
    return null;
  }
}
enum ArrowDirection {
  LEFT = -1,
  RIGHT = 1,
}
