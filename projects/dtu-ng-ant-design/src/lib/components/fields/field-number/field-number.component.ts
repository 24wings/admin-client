import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldNumberConfig } from '../../../core/fields/field-number-config';

@Component({ selector: 'field-number', templateUrl: './field-number.component.html' })
export class FieldNumberComponent {
  @Input() config: FieldNumberConfig;
  @Input() data;
  @Input() form: FormGroup;
  get isValid() {
    return this.form.controls[this.config.key].valid;
  }
  get formValue(){
    return this.form.controls[this.config.key].value;
  }

  constructor() {}
}
