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
