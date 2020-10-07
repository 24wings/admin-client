import { Column } from 'projects/dtu-ng-ant-design/src/lib/decorators/columns/column';
import { Field } from 'projects/dtu-ng-ant-design/src/lib/decorators/fields/field';
import { DataGrid } from 'projects/dtu-ng-ant-design/src/lib/decorators/widgets/data-grid';
import { DataManager } from 'projects/dtu-ng-ant-design/src/lib/decorators/widgets/data-manager';
import { Editor } from 'projects/dtu-ng-ant-design/src/lib/decorators/widgets/editor';
import { QueryToolbar } from 'projects/dtu-ng-ant-design/src/lib/decorators/widgets/query-toolbar';

@Editor({})
@QueryToolbar({})
@DataManager({table: 'data-grid-case', autoLoad: true, adapter: 'local'})
@DataGrid({title: 'DataGrid案例', pageSize: 1, selection: false, editorEntity: DataGridCase})
export class DataGridCase{
    @Field('id', {isPrimaryKey: true, readonly: true,condition:'='})
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
