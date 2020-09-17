import { Column } from 'src/app/meta-ui/decorators/columns/column';
import { Field } from 'src/app/meta-ui/decorators/fields/field';
import { DataGrid } from 'src/app/meta-ui/decorators/widgets/data-grid';
import { Editor } from 'src/app/meta-ui/decorators/widgets/editor';
import { QueryToolbar } from 'src/app/meta-ui/decorators/widgets/query-toolbar';

@QueryToolbar({ loadUrl: 'assets/data/load-users.json' })
export class TableQueryToolbarEntity {
  @Field('姓名', { required: true })
  name: string;
  @Field('年龄')
  age: number;
}

@Editor({ loadUrl: 'assets/data/load-user-detail.json', submitUrl: 'asset/data/update-use.json' })
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
