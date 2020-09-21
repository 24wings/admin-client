import { BasicDataGrid } from './basic-data-grid';
import { BasicEditorCase } from './basic-editor-case';
import { BasicUser } from './basic-user';
import { DataGridCase } from './data-grid-case';
import { TableQuerybar } from './table-querybar';

export const pageMappings = [
  { name: 'BasicUser', entity: BasicUser },
  { name: 'TableQuerybar', entity: TableQuerybar },
  {name: 'BasicDataGrid', entity: BasicDataGrid},
  {name: 'DataGridCase', entity: DataGridCase},
  {name: 'BasicEditorCase', entity: BasicEditorCase}
];
