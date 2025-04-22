import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { YesNoButtonGroupComponent } from './shared/components/yes-no-button-group/yes-no-button-group.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, YesNoButtonGroupComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
