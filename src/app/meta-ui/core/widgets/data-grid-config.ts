import { BasicColumn } from '../basic-column';
import { BasicDynamicComponentConfig } from '../basic-dynamic-component.config';
import { ColumnDateConfig } from '../columns/column-date-config.component';
import { EditorConfig } from './editor-config';
import { QueryToolbarConfig } from './query-toolbar-config';

export class DataGridConfig extends BasicDynamicComponentConfig {
  title?: string;
  columns?: (BasicColumn | ColumnDateConfig)[];
  loadUrl?: string;
  queryToolbar?: QueryToolbarConfig;
  queryEntity?: any;
  editor?: EditorConfig;
  editorEntity?: any;
}
