
import { Field } from 'projects/dtu-ng-ant-design/src/lib/decorators/fields/field';
import { DataManager } from 'projects/dtu-ng-ant-design/src/lib/decorators/widgets/data-manager';
import { Editor } from 'projects/dtu-ng-ant-design/src/lib/decorators/widgets/editor';
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
