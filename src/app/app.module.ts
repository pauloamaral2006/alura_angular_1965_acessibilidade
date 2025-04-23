import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { YesNoButtonGroupComponent } from './shared/components/yes-no-button-group/yes-no-button-group.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DisabledControlDirective } from './shared/directives/disabled-control/disabled-control.directive';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    YesNoButtonGroupComponent,
    ReactiveFormsModule,
    DisabledControlDirective,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
