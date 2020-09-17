import { BasicField } from '../../core/basic-field';
import { defaultTypeComponentMapping } from '../../default-type-component-mapping';
import { DataGridSymbol } from '../widgets/data-grid';
import { QueryToolbarSymbol } from '../widgets/query-toolbar';
export const FieldSymbol = Symbol('field');

export function Field(label: string, opt?: BasicField) {
  return (target, key) => {
    const type = Reflect.getMetadata('design:type', target, key);
    const existDefaultMapping = defaultTypeComponentMapping.fileds.find((defaultType) => defaultType.name === type);
    if (!opt) {
      opt = { label, key };
      if (existDefaultMapping) {
        opt.componentAlias = existDefaultMapping.componentAlias;
      }
    } else {
      opt.label = label;
      opt.key = key;
      opt.componentAlias = opt.componentAlias || existDefaultMapping.componentAlias;
    }
    const fields = Reflect.getMetadata(FieldSymbol, target.prototype || target) || [];
    fields.push(opt);
    Reflect.defineMetadata(FieldSymbol, fields, target);
  };
}

export function getFields(target) {
  return Reflect.getMetadata(FieldSymbol, target.prototype || target) || [];
}
