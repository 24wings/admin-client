import { BasicColumn } from '../basic-column';

export class ColumnStringConfig extends BasicColumn {
  type?: 'text' | 'passowrd' | 'number' | 'email';
}
