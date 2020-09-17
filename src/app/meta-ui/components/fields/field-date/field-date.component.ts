import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldDateConfig } from 'src/app/meta-ui/core/fields/field-date-config';

@Component({ selector: 'field-date', templateUrl: './field-date.component.html' })
export class FieldDateComponent {
  @Input() config: FieldDateConfig;
  @Input() form: FormGroup;
  @Input() data: any;
  get isValid() {
    return this.form.controls[this.config.key].valid;
  }
}
