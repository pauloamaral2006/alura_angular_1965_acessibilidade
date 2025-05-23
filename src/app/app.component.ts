import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'a11y-p1';
  public yesNoAnswer = 'no';

  public form: FormGroup = null;
  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      yesNoAnswer: [
        {
          value: null,
          disabled: true,
        },
      ],
    });
  }
  public submit(): void {
    this.form.get('yesNoAnswer').disable(); 
    console.log(this.form.value);
  }
}
