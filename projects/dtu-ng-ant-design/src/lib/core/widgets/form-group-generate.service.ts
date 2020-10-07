import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BasicField } from '../basic-field';
@Injectable()
export class FormGroupGenerateService {
  toFormGroup(fields: BasicField[], data: any= {}) {
    const group: any = {};
    fields.forEach((field) => {
      group[field.key] = field.required
        ? new FormControl( data[field.key] || '', Validators.required)
        : new FormControl(data[field.key] || '');
    });
    return new FormGroup(group);
  }
}
