import { Component } from '@angular/core';
import { DynamicFormControl } from './model/dynamic-form-control';
import { DynamicControlType } from './model/dynamic-control-type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-forms-app';

  form: DynamicFormControl[] = [
    {
      type: DynamicControlType.text,
      value: 'yay it works :)',
      label: 'Text:',
    },
    {
      type: DynamicControlType.number,
      value: 8,
      label: 'Number:',
    },
  ];
}
