import { Component, Input, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { DynamicFormControl } from 'src/app/model/dynamic-form-control';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent {
  @Input() dynamicFormControls: DynamicFormControl[] = [];

  form: FormGroup = this.fb.group({
    dynamic: this.fb.array([])
  });
  //dynamicForm: FormArray = this.fb.array([]);

  get dynamicForm(): FormArray{
    return this.form.get('dynamic') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnDestroy(): void {
  }

  ngOnChange(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit() {
    this.setForm();
  }

  setForm() {
    this.dynamicFormControls.forEach(dynamicControl =>{
      this.dynamicForm.push(this.createFormControl(dynamicControl));
    });
    console.log(this.form);
  }


  createFormControl(templateControl: DynamicFormControl): FormGroup {
    return this.fb.group({
      dynamicControl: this.fb.control(templateControl.value),
    });
  }

  onSubmit() {
    console.log(this.dynamicForm.value);
  }

}
