装饰器代码
```typescript
@Editor({editTitle: '编辑模态框', insertTitle: '新增模态框'})
@DataManager({table: 'data-grid-case', autoLoad: true, adapter: 'local'})
export class BasicEditorCase{
    @Field('id', {isPrimaryKey: true, readonly: true})
    id: number;
    @Field('关键字', {condition: 'like'})
    name: string;
    @Field('年龄', {})
    age: number;
    @Field('生日', {})
    birthDate: Date;
}
```
组件调用代码 文件位于`src/app/routes/developer/admin-ui-decorator-doc/admin-ui-decorator-doc.component.html`
```html
      <button nz-button (click)="basicEditorCaseJson=entityResolveMetaConfigService.resolvelEntity(BasicEditorCase)">显示Editor组件编辑框</button>
                <button nz-button (click)="basicEditorCaseDynamicComponentJson=entityResolveMetaConfigService.resolvelEntity(BasicEditorCase)">显示动态组件Editor</button>
                <meta-editor [mode]="'insert'" [config]="basicEditorCaseJson" *ngIf="basicEditorCaseJson" (onSave)="basicEditorCaseJson=null;logEditorContent($event)" (onclose)="basicEditorCaseJson=null;"></meta-editor>
                <dynamic-component [config]="basicEditorCaseDynamicComponentJson" *ngIf="basicEditorCaseDynamicComponentJson"></dynamic-component>
```
组件调用函数 位于`src/app/routes/developer/admin-ui-decorator-doc/admin-ui-decorator-doc.component.ts`
```typescript
import { Component } from '@angular/core';
import { QueryToolbar } from 'src/app/meta-ui/decorators/widgets/query-toolbar';
import { BasicDataGrid } from '../../dto-pages/basic-data-grid';
import { BasicUser } from '../../dto-pages/basic-user';
import { TableQuerybar } from '../../dto-pages/table-querybar';

import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { EntityResolveMetaConfigService } from 'src/app/meta-ui/services/entity-resovle-meta-config.service';
import { BasicEditorCase } from '../../dto-pages/basic-editor-case';
import { DataGridCase } from '../../dto-pages/data-grid-case';

@Component({
    selector: 'admin-ui-decorator-doc',
templateUrl: './admin-ui-decorator-doc.component.html'})
export class AdminUiDecoratorDocComponent{
    BasicUser = BasicUser;
    TableQuerybar = TableQuerybar;
    BasicDataGrid = BasicDataGrid;
    DataGridCase = DataGridCase;
    BasicEditorCase = BasicEditorCase;

    basicEditorCaseJson;
    basicEditorCaseDynamicComponentJson;
    constructor(public entityResolveMetaConfigService: EntityResolveMetaConfigService, private msg: NzMessageService){
    }

    logEditorContent(content){
        this.msg.success(JSON.stringify(content));
    }
    
}

```


