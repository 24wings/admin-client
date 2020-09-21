import { ComponentAlias } from '../../component-alais';
import { TreeViewConfig } from '../../core/widgets/tree-view-config';

const TreeViewSymbol = Symbol('tree-view');

export function TreeView(title: string, config: TreeViewConfig){
    config.title = title;
    config.componentAlias = ComponentAlias.TreeView;
    return (target) => {
            Reflect.defineMetadata(TreeViewSymbol, config, target);
          };
}

export function getTreeView(target): TreeViewConfig{
    return Reflect.getMetadata(TreeViewSymbol, target);
}
