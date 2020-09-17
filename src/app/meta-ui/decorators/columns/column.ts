import 'reflect-metadata';
import { BasicColumn } from '../../core/basic-column';
import { ColumnDateConfig } from '../../core/columns/column-date-config.component';
import { DataGridConfig } from '../../core/widgets/data-grid-config';
import { defaultTypeComponentMapping } from '../../default-type-component-mapping';
import { DataGridSymbol } from '../widgets/data-grid';

export const ColumnsSymbol = Symbol('column');

export function Column(label: string, config?: Partial<BasicColumn> & Partial<ColumnDateConfig>) {
  return (target: any, key) => {
    if (!config) {
      config = { label, key };
    } else {
      config.label = label;
      config.key = key;
    }
    const type = Reflect.getMetadata('design:type', target, key);
    const existDefaultMapping = defaultTypeComponentMapping.columns.find((defaultType) => defaultType.name === type);
    if (!config.componentAlias && existDefaultMapping) {
      config.componentAlias = existDefaultMapping.componentAlias;
    }

    const columns = (Reflect.getMetadata(ColumnsSymbol, target) || []) as BasicColumn[];
    columns.push(config);
    Reflect.defineMetadata(ColumnsSymbol, columns, target);
  };
}
