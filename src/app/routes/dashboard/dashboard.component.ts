import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ComponentAlias } from 'src/app/meta-ui/component-alais';
import { BasicColumn } from 'src/app/meta-ui/core/basic-column';
import { BasicDynamicComponent } from 'src/app/meta-ui/core/basic-dynamic-component';
import { BasicDynamicComponentConfig } from 'src/app/meta-ui/core/basic-dynamic-component.config';
import { DataGridConfig } from 'src/app/meta-ui/core/widgets/data-grid-config';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  config: BasicColumn = {
    componentAlias: ComponentAlias.ColumnString,
    label: 'column-string',
    key: 'index',
  };
  data = { index: '下标' };
  dataGridConfig: DataGridConfig = {
    componentAlias: ComponentAlias.DataGrid,

    columns: [
      { label: 'Id', key: 'id', componentAlias: ComponentAlias.ColumnString },
      { label: '姓名', key: 'name', componentAlias: ComponentAlias.ColumnString },
      { label: '生日', key: 'birthDate', componentAlias: ComponentAlias.ColumnDate, format: 'yyyy-MM-dd HH:mm:ss' },
    ],
  };
  dataGridData = [{ id: 1, name: 'aaa', birthDate: new Date() }];
}
