import { Injectable } from '@angular/core';
import { ComponentAlias } from '../component-alais';
import { ColumnBooleanComponent } from '../components/columns/column-boolean/column-boolean.component';
import { ColumnDateComponent } from '../components/columns/column-date/column-date.component';
import { ColumnNumberComponent } from '../components/columns/column-number/column-number.component';
import { ColumnStringComponent } from '../components/columns/column-string/column-string.component';
import { FieldBooleanComponent } from '../components/fields/field-boolean/field-boolean.component';
import { FieldDateComponent } from '../components/fields/field-date/field-date.component';
import { FieldNumberComponent } from '../components/fields/field-number/field-number.component';
import { FieldStringComponent } from '../components/fields/field-string/field-string.component';
import { DataGridComponent } from '../components/widgets/data-grid/data-grid.component';
import { EditorComponent } from '../components/widgets/editor/editor.component';

@Injectable()
export class ComponentRegisterProvider {
  componentMappings: { alias: ComponentAlias; component: any }[] = [];

  constructor() {
    this.componentMappings.push({ alias: ComponentAlias.ColumnString, component: ColumnStringComponent });
    this.componentMappings.push({ alias: ComponentAlias.ColumnNumber, component: ColumnNumberComponent });
    this.componentMappings.push({ alias: ComponentAlias.ColumnDate, component: ColumnDateComponent });

    this.componentMappings.push({ alias: ComponentAlias.ColumnBoolean, component: ColumnBooleanComponent });
    this.componentMappings.push({ alias: ComponentAlias.DataGrid, component: DataGridComponent });
    this.componentMappings.push({ alias: ComponentAlias.FieldString, component: FieldStringComponent });
    this.componentMappings.push({ alias: ComponentAlias.FieldNumber, component: FieldNumberComponent });

    this.componentMappings.push({ alias: ComponentAlias.FieldDate, component: FieldDateComponent });
    this.componentMappings.push({ alias: ComponentAlias.FieldBoolean, component: FieldBooleanComponent });
    this.componentMappings.push({ alias: ComponentAlias.Editor, component: EditorComponent });
    
  }
}
