import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldStringConfig } from 'src/app/meta-ui/core/fields/field-string-config';
import { ValidService } from 'src/app/meta-ui/services/valid.service';
import { StringComSpec } from '../string-com-spec';

@Component({ selector: 'field-string', templateUrl: './field-string.component.html' })
export class FieldStringComponent implements OnInit {
  @Input() config: FieldStringConfig;
  @Input() data: any;
  constructor(public valid: ValidService) {}
  @Input() form: FormGroup;
  get isValid() {
    return this.form.controls[this.config.key].valid;
  }
  ngOnInit() {}
}
