import { ComponentAlias } from '../../component-alais';
import { DataGridConfig } from '../../core/widgets/data-grid-config';
export const DataGridSymbol = Symbol('data-grid');

export function DataGrid(config: DataGridConfig) {
  config.columns = [];
  config.componentAlias = ComponentAlias.DataGrid;
  return (target) => {
    Reflect.defineMetadata(DataGridSymbol, config, target);
  };
}
