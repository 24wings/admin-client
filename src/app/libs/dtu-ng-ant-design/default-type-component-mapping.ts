import { ComponentAlias } from './component-alais';

export const defaultTypeComponentMapping = {
  columns: [
    { name: String, componentAlias: ComponentAlias.ColumnString },
    { name: Number, componentAlias: ComponentAlias.ColumnNumber },
    { name: Date, componentAlias: ComponentAlias.ColumnDate },
    { name: Boolean, componentAlias: ComponentAlias.ColumnBoolean },
  ],
  fileds: [
    { name: String, componentAlias: ComponentAlias.FieldString },
    { name: Number, componentAlias: ComponentAlias.FieldNumber },
    { name: Date, componentAlias: ComponentAlias.FieldDate },
    { name: Boolean, componentAlias: ComponentAlias.FieldBoolean },
  ],
};
