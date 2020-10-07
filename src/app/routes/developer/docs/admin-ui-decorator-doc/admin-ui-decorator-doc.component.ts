import { Component } from '@angular/core';
import { BasicDataGrid } from '../../dto-pages/basic-data-grid';
import { BasicUser } from '../../dto-pages/basic-user';
import { TableQuerybar } from '../../dto-pages/table-querybar';

import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
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
    constructor( private msg: NzMessageService){
    }

    logEditorContent(content){
        this.msg.success(JSON.stringify(content));
    }
    
}
