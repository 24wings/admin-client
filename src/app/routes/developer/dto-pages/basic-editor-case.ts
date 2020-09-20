import { Column } from 'src/app/meta-ui/decorators/columns/column';
import { Field } from 'src/app/meta-ui/decorators/fields/field';
import { DataGrid } from 'src/app/meta-ui/decorators/widgets/data-grid';
import { DataManager } from 'src/app/meta-ui/decorators/widgets/data-manager';
import { Editor } from 'src/app/meta-ui/decorators/widgets/editor';
import { QueryToolbar } from 'src/app/meta-ui/decorators/widgets/query-toolbar';
import { DataGridCase } from './data-grid-case';

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
