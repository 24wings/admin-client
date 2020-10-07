import { Column } from 'projects/dtu-ng-ant-design/src/lib/decorators/columns/column';
import { Field } from 'projects/dtu-ng-ant-design/src/lib/decorators/fields/field';
import { DataGrid } from 'projects/dtu-ng-ant-design/src/lib/decorators/widgets/data-grid';
import { DataManager } from 'projects/dtu-ng-ant-design/src/lib/decorators/widgets/data-manager';
import { Editor } from 'projects/dtu-ng-ant-design/src/lib/decorators/widgets/editor';
import { QueryToolbar } from 'projects/dtu-ng-ant-design/src/lib/decorators/widgets/query-toolbar';

@QueryToolbar({ loadUrl: 'assets/data/load-users.json' })
export class TableQueryToolbarEntity {
  @Field('姓名', { required: true })
  name: string;
  @Field('年龄')
  age: number;
}

@Editor({ editTitle: '编辑' })
@DataManager({autoLoad: true, autoInsert: true, autoUpdate: true, autoRemove: true, adapter: 'local'})
@DataGrid({ title: '基础查询表格', queryEntity: TableQueryToolbarEntity, editorEntity: TableQuerybar })
export class TableQuerybar {
  @Field('id', { readonly: true, isPrimaryKey: true })
  @Column('id')
  id: number;

  @Field('姓名')
  @Column('姓名')
  name: string;

  @Field('生日')
  @Column('生日', { format: 'yyyy-MM-dd ' })
  birthDate: Date;
  @Column('是否成年')
  over18: boolean;
  @Field('年龄')
  @Column('年龄')
  age: number;
}
