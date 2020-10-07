import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormGroupGenerateService } from '../../../core/widgets/form-group-generate.service';
import { QueryToolbarConfig } from '../../../core/widgets/query-toolbar-config';
import { DataQueryService } from '../../../services/data-query.service';
import { DataManagerComponent } from '../../data/data-manager/data-manager.component';
@Component({ selector: 'query-toolbar', templateUrl: './query-toolbar.component.html' })
export class QueryToolbarComponent implements OnInit {
  @Input() config: QueryToolbarConfig;
  queryObject: any = {};
  data: any = [];
  total = 0;
  form: FormGroup;
  @Input() pageSize=10;
  @ViewChild('dataManager') dataManager: DataManagerComponent;
  @Output() searchResult = new EventEmitter<{ items: any[]; total: number }>();
  constructor(
    private httpClient: HttpClient,
    private formGroupGenerateService: FormGroupGenerateService,
    private dataQueryServerice: DataQueryService
     ) {}
  ngOnInit() {
    this.form = this.formGroupGenerateService.toFormGroup(this.config.queryFields);
  }

 async search() {
    // if (this.config.loadUrl) {
    //   this.httpClient.get(this.config.loadUrl).subscribe((rtn: any) => {
    //     this.data = rtn.data.items;
    //     this.total = rtn.data.total;
    //     this.searchResult.emit(rtn.data);
    //   });
    // }
  const queryObject =  this.dataQueryServerice.queryToolbarValueToQueryObject(this.form.getRawValue(), this.config);
  queryObject.take=this.pageSize;
  const result =  await this.dataManager.load(queryObject);
  this.searchResult.emit(result.data);


  }
}
