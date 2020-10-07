import { BasicColumn } from '../basic-column';
import { BasicDynamicComponentConfig } from '../basic-dynamic-component.config';
import { ColumnDateConfig } from '../columns/column-date-config.component';
import { DataManagerConfig } from '../data/data-manager-config';
import { EditorConfig } from './editor-config';
import { QueryToolbarConfig } from './query-toolbar-config';

export class DataGridConfig extends BasicDynamicComponentConfig {
  title?: string;
  columns?: (BasicColumn | ColumnDateConfig)[];
  dataManager?: DataManagerConfig;
  queryToolbar?: QueryToolbarConfig;
  queryEntity?: any;
  editor?: EditorConfig;
  editorEntity?: any;
  pageSize?: number;
  selection?: boolean;
}
