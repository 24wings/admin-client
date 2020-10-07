import { Column } from 'projects/dtu-ng-ant-design/src/lib/decorators/columns/column';
import { Field } from 'projects/dtu-ng-ant-design/src/lib/decorators/fields/field';
import { DataGrid } from 'projects/dtu-ng-ant-design/src/lib/decorators/widgets/data-grid';
import { DataManager } from 'projects/dtu-ng-ant-design/src/lib/decorators/widgets/data-manager';
import { Editor } from 'projects/dtu-ng-ant-design/src/lib/decorators/widgets/editor';
import { QueryToolbar } from 'projects/dtu-ng-ant-design/src/lib/decorators/widgets/query-toolbar';


@QueryToolbar({})
@DataManager({table: 'basic-data-grid', autoLoad: true, autoInsert: true, autoRemove: true, autoUpdate: true, adapter: 'local'})

export class BasicDataGridQueryToolbar{
    @Field('姓名', {span: 12, condition: 'like'})
    name: string;
    @Field('开始日期', {span: 12})
    startDate: Date;
    @Field('截止日期', {span: 12})
    endDate: Date;
    
}

@Editor({editTitle: '编辑数据'})
@DataGrid({title: '基本数据表格', queryEntity: BasicDataGridQueryToolbar})
@DataManager({table: 'basic-data-grid', autoLoad: true, autoInsert: true, autoRemove: true, autoUpdate: true, adapter: 'local'})
export class BasicDataGrid{
    @Field('id', {isPrimaryKey: true, readonly: true})
    @Column('id', {isPrimaryKey: true})
    id: number;
    @Field('姓名', {})
    @Column('姓名', {})
    name: string;
    @Field('年龄', {})
    @Column('年龄', {})
    age: number;
    @Field('生日', {})
    @Column('生日', {})
    birthDate: Date;

}
