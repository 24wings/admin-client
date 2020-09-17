import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EditorConfig } from 'src/app/meta-ui/core/widgets/editor-config';
import { FormGroupGenerateService } from 'src/app/meta-ui/core/widgets/form-group-generate.service';

@Component({ selector: 'meta-editor', templateUrl: './editor.component.html' })
export class EditorComponent implements OnInit {
  @Input() config: EditorConfig;
  @Input() data: any = {};
  @Input() form: FormGroup;
  @Output() onclose = new EventEmitter();
  visible = true;

  constructor(private formGroupGenerateService: FormGroupGenerateService) {}

  ngOnInit() {
    this.form = this.formGroupGenerateService.toFormGroup(this.config.fields);
  }
  submit() {
    this.onclose.emit(true);
  }
}
