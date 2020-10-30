import { Injectable } from '@angular/core';
import { DataGridConfig } from '../core/widgets/data-grid-config';

@Injectable()
export class CodeGenService{

    constructor(){}

    resolveDataGridComponentCode(config: DataGridConfig): {html: string, code: string, css: string}{
      const html =  this.resolveDataGridComponentHtml(config);
      const code = this.resolveDataGridComponentTypescript(config);
      return {html, code, css: ''};

    }
    resolveDataGridComponentTypescript(config: DataGridConfig){
return `
\`\`\`typescript
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import * as _ from 'loadsh';
import { DataGridConfig } from '../../../core/widgets/data-grid-config';
import { DataManagerComponent } from '../../data/data-manager/data-manager.component';
@Component({ selector: 'data-grid', templateUrl: './data-grid.component.html' })
export class DataGridComponent implements OnInit, AfterViewInit{
  
  @Input() config: DataGridConfig;
  @Input() data: any[];
  @ViewChild('dataManager') dataManager: DataManagerComponent;
  selectedRecord: any;
  checked = false;
  loading = false;
  indeterminate = false;
  setOfCheckedId = new Set<number>();
  total = 0;
  editorMode: 'insert'|'update';
  sortByField?: string;
  orderBy: 'ascend'|'descend';
  pageIndex = 1;
  constructor(private httpClient: HttpClient) {

  }
 
  sortBy(column){
      this.sortByField = column.key;
      this.orderBy = column.sortOrder;
      this.refresh();
       
  }
 async  ngOnInit(){



  }
  async ngAfterViewInit(){
    // if (!this.config.selection === false ){
    //   this.config.selection = true;
    // }
    // this.config.pageSize = this.config.pageSize || 10;
 
    await this.refresh();
  }
  onAllChecked(checked: boolean): void {
    this.data.filter(({ disabled }) => !disabled).forEach(({ id }) => this.updateCheckedSet(id, checked));
    this.refreshCheckedStatus();
  }
  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }
  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }
 async  refresh(){
   const orderBy = {
     key: this.sortByField,
   sort: this.orderBy
  };
   const result = await this.dataManager.load({orderBy, take: this.config.pageSize || 10, skip: (this.pageIndex - 1) * (this.config.pageSize || 10)});
   this.data = result.data.items;
   this.total = result.data.total;
  }
 async delete(data){
   await this.dataManager.remove(data);
   
   await  this.refresh();
  }

  onCurrentPageDataChange(listOfCurrentPageData: any[]): void {
    this.data = listOfCurrentPageData;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    const listOfEnabledData = this.data.filter(({ disabled }) => !disabled);
    this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
    this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
  }
}
\`\`\`\      
`;
    }

    resolveDataGridComponentHtml(config: DataGridConfig): string{
       return `
\`\`\`html
<ng-page-header-wrapper [title]="title" [action]="action">
  <ng-template #title>
    ${config.title}
  </ng-template>

  <ng-template #action>
    <div style="display: flex; justify-content: flex-end">
      <button nz-button nzType="primary" (click)="editorMode='insert'; selectedRecord = {}" *ngIf="config.editor"><i nz-icon nzType="plus"></i> {{ '新增' }}</button>
    </div>
  </ng-template>
  <nz-card>
    <query-toolbar
      *ngIf="config.queryToolbar"
      [config]="config.queryToolbar"
      (searchResult)="data = $event.items; total = $event.total"
      [pageSize]="config.pageSize"
    ></query-toolbar>
    <nz-table (nzPageIndexChange)="pageIndex=$event;refresh()" (nzPageSizeChange)="config.pageSize=$event;refresh()" [nzFrontPagination]="false" [nzPageSize]="config.pageSize" [nzTotal]="total" #basicTable nzShowSizeChanger [nzTotal]="total" [nzFrontPagination]="false" [nzData]="data">
      <thead>
<tr>
  <th [nzChecked]="checked" *ngIf="config.selection" [nzIndeterminate]="indeterminate" (nzCheckedChange)="onAllChecked($event)"></th>

  <th *ngFor="let column of config.columns" [(nzSortOrder)]="column.sortOrder" [nzSortFn]="true"  [nzSortDirections]="null"   (nzSortOrderChange)="sortBy(column)" >{{ column.label }}</th>
  <th>操作</th>
</tr>
      </thead>
      <tbody>
<tr *ngFor="let item of data">
  <td
    [nzChecked]="setOfCheckedId.has(item.id)"
    [nzDisabled]="item.disabled"
    (nzCheckedChange)="onItemChecked(item.id, $event)"
    *ngIf="config.selection"
  ></td>
  <td *ngFor="let column of config.columns"><dynamic-component [config]="column" [data]="item"></dynamic-component></td>
  <td>
    <a (click)="editorMode='update'; selectedRecord = item">编辑</a>
    <nz-divider nzType="vertical"></nz-divider>
    <a  nz-popconfirm
    nzPopconfirmTitle="确定删除这条记录?"
    nzPopconfirmPlacement="bottom"
    (nzOnConfirm)="delete(item)"
   > 删除</a>
  </td>
</tr>
      </tbody>
    </nz-table>
    <meta-editor
      [config]="config.editor"
      (onclose)="selectedRecord = null"
      [data]="selectedRecord || {}"
      *ngIf="config.editor&& selectedRecord"
      [mode]="editorMode"
      (onSave)="selectedRecord=null;refresh()"
    ></meta-editor>
    <data-manager #dataManager [config]="config.dataManager" ></data-manager>
  </nz-card>
</ng-page-header-wrapper>

\`\`\`
`;
    }

}
