import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BasicField } from '../basic-field';
@Injectable()
export class FormGroupGenerateService {
  toFormGroup(fields: BasicField[]) {
    const group: any = {};
    fields.forEach((question) => {
      group[question.key] = question.required
        ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}
