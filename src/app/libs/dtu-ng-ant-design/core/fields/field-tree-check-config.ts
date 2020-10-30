import { BasicDynamicComponentConfig } from '../basic-dynamic-component.config';
import { BasicField } from '../basic-field';
import { DataManagerConfig } from '../data/data-manager-config';

export class FieldTreeCheckConfig extends BasicField {
  idKey?: string;
  parentIdKey?: string;
  displayKey?: string;
  dataManager?: DataManagerConfig;

}
