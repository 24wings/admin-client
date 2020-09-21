import { ComponentAlias } from '../../component-alais';
import { DataGridConfig } from './data-grid-config';

export class TreeViewConfig extends DataGridConfig{
    componentAlias?: ComponentAlias = ComponentAlias.TreeView;
    key: string;
    parentKey: string;
    displayKey:string;
    
}
