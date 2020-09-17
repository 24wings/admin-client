import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormGroupGenerateService } from 'src/app/meta-ui/core/widgets/form-group-generate.service';
import { QueryToolbarConfig } from '../../../core/widgets/query-toolbar-config';
@Component({ selector: 'query-toolbar', templateUrl: './query-toolbar.component.html' })
export class QueryToolbarComponent implements OnInit {
  @Input() config: QueryToolbarConfig;
  queryObject: any = {};
  data: any = [];
  total = 0;
  form: FormGroup;
  @Output() searchResult = new EventEmitter<{ items: any[]; total: number }>();
  constructor(private httpClient: HttpClient, private formGroupGenerateService: FormGroupGenerateService) {}
  ngOnInit() {
    this.form = this.formGroupGenerateService.toFormGroup(this.config.queryFields);
    debugger;
  }

  search() {
    if (this.config.loadUrl) {
      this.httpClient.get(this.config.loadUrl).subscribe((rtn: any) => {
        this.data = rtn.data.items;
        this.total = rtn.data.total;
        this.searchResult.emit(rtn.data);
      });
    }
  }
}
