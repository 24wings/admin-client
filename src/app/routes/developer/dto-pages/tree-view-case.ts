import { Column } from 'src/app/meta-ui/decorators/columns/column';
import { DataManager } from 'src/app/meta-ui/decorators/widgets/data-manager';
import { TreeView } from 'src/app/meta-ui/decorators/widgets/tree-view';

@DataManager({adapter: 'local', autoLoad: true, autoInsert: true, autoRemove: true, autoUpdate: true})
@TreeView('树形控件案例', {key: 'id', parentKey: 'parentId', displayKey: 'name'})
export class TreeViewCase{
    @Column('id', {isPrimaryKey: true, })
    id: number;
    @Column('id')
    parentId: number;
    @Column('名称')
    name: string;

}
