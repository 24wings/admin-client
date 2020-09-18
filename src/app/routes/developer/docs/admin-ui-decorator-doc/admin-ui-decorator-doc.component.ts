import { Component } from '@angular/core';
import { QueryToolbar } from 'src/app/meta-ui/decorators/widgets/query-toolbar';
import { BasicDataGrid } from '../../dto-pages/basic-data-grid';
import { BasicUser } from '../../dto-pages/basic-user';
import { TableQuerybar } from '../../dto-pages/table-querybar';

@Component({
    selector: 'admin-ui-decorator-doc',
templateUrl: './admin-ui-decorator-doc.component.html'})
export class AdminUiDecoratorDocComponent{
    BasicUser = BasicUser;
    TableQuerybar = TableQuerybar;
    BasicDataGrid=BasicDataGrid;

}
