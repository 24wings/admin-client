import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldBooleanConfig } from '../../../core/fields/field-boolean-config';

@Component({
  selector: 'field-boolean',
  templateUrl: './field-boolean.component.html',
})
export class FieldBooleanComponent {
  @Input() config: FieldBooleanConfig;
  @Input() form: FormGroup;
  @Input() data: any;
  get isValid() {
    return this.form.controls[this.config.key].valid;
  }
}
