import { Column } from 'src/app/meta-ui/decorators/columns/column';
import { Field } from 'src/app/meta-ui/decorators/fields/field';
import { DataGrid } from 'src/app/meta-ui/decorators/widgets/data-grid';
import { DataManager } from 'src/app/meta-ui/decorators/widgets/data-manager';
import { Editor } from 'src/app/meta-ui/decorators/widgets/editor';
import { QueryToolbar } from 'src/app/meta-ui/decorators/widgets/query-toolbar';


@Editor({})
@QueryToolbar({})
@DataManager({table: 'data-grid-case', autoLoad: true, adapter: 'local'})
@DataGrid({title: 'DataGrid案例', pageSize: 1, selection: false, editorEntity: DataGridCase})
export class DataGridCase{
    @Field('id', {isPrimaryKey: true, readonly: true})
    @Column('id', {isPrimaryKey: true})
    id: number;
    @Field('关键字', {condition: 'like'})
    @Column('姓名', {})
    name: string;
    @Column('年龄', {})
    age: number;
    @Column('生日', {})
    birthDate: Date;
}
