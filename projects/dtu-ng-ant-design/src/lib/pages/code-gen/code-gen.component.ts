import { Component, Input } from '@angular/core';
import { EntityResolveMetaConfigService } from '../../services/entity-resovle-meta-config.service';

@Component({selector: 'code-gen', templateUrl: './code-gen.component.html'})
export class CodeGenComponent{
    @Input() type;
    config;
    constructor(private entityResolveMetaConfigService: EntityResolveMetaConfigService){
    }
    ngOnInit(){
      this.config =  this.entityResolveMetaConfigService.resolveDataGrid(this.type);

    }

    get code(){
return `
\`\`\`html
<ng-page-header-wrapper [title]="title" [action]="action">
  <ng-template #title>
    ${this.config.title}
  </ng-template>

  <ng-template #action>
    <div style="display: flex; justify-content: flex-end">
      <button nz-button nzType="primary" (click)="editorMode='insert'; selectedRecord = {}" *ngIf="config.editor"><i nz-icon nzType="plus"></i> {{ '新增' }}</button>
      <!-- <button nzType="danger" nz-button (click)="deleteLanguage($event)">{{l('Remove')}}</button> -->
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