import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KeyBoardManagerDirective } from './keyboard-manager.directive';
import { KeyBoardManagerItemDirective } from './keyboard-manager-item.directive';

@NgModule({
  declarations: [KeyBoardManagerDirective, KeyBoardManagerItemDirective],
  imports: [CommonModule],
  exports: [],
})
export class KeyboardManagerModule {}
