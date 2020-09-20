import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EditorConfig } from 'src/app/meta-ui/core/widgets/editor-config';
import { FormGroupGenerateService } from 'src/app/meta-ui/core/widgets/form-group-generate.service';
import { DataManagerComponent } from '../../data/data-manager/data-manager.component';

@Component({ selector: 'meta-editor', templateUrl: './editor.component.html' })
export class EditorComponent implements OnInit {
  @Input() config: EditorConfig;
  @Input() data: any = {};
  @Input() form: FormGroup;
  @Input() mode: 'insert'|'update';
  @Output() onclose = new EventEmitter();
  @Output() onSave = new EventEmitter();
  @ViewChild('dataManager') dataManager: DataManagerComponent;
  visible = true;
  get title(){
    if (this.mode === 'insert'){
      return this.config.insertTitle || '新增';
    }else{
      return this.config.editTitle || '编辑';
    }

  }

  constructor(private formGroupGenerateService: FormGroupGenerateService) {}

  ngOnInit() {
    this.form = this.formGroupGenerateService.toFormGroup(this.config.fields, this.data ? this.data : {});
  }
  submit() {
    if (this.mode === 'update'){
      this.dataManager.update(this.form.getRawValue());

    }else{
      this.dataManager.insert(this.form.getRawValue());
    }
    this.onSave.emit({action: this.mode, data: this.form.getRawValue()});

   
  }
}
