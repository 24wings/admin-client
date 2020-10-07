import { BasicDynamicComponentConfig } from '../basic-dynamic-component.config';
import { BasicField } from '../basic-field';
import { DataManagerConfig } from '../data/data-manager-config';

export class EditorConfig extends BasicDynamicComponentConfig {
  editTitle?: string;
  insertTitle?: string;

  fields?: BasicField[];
  dataManager?: DataManagerConfig;
}
