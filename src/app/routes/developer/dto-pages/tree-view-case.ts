import { Column } from 'src/app/meta-ui/decorators/columns/column';
import { Field } from 'src/app/meta-ui/decorators/fields/field';
import { DataManager } from 'src/app/meta-ui/decorators/widgets/data-manager';
import { Editor } from 'src/app/meta-ui/decorators/widgets/editor';
import { TreeView } from 'src/app/meta-ui/decorators/widgets/tree-view';

@Editor({})
@DataManager({adapter: 'local', table: 'tree-view-case', autoLoad: true, autoInsert: true, autoRemove: true, autoUpdate: true})
@TreeView('树形控件案例', {key: 'id', parentKey: 'parentId', displayKey: 'name'})
export class TreeViewCase{
    @Field('id', {isPrimaryKey: true, readonly: true})
    @Column('id', {isPrimaryKey: true})
    id: number;
    @Column('上级')
    @Field('上级', {readonly: true})
    parentId: number;

    @Field('名称')
    @Column('名称')
    name: string;
    @Column('链接')
    @Field('链接')
    link: string;

}
