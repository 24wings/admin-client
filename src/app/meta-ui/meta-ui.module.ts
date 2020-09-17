import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { ColumnBooleanComponent } from './components/columns/column-boolean/column-boolean.component';
import { ColumnDateComponent } from './components/columns/column-date/column-date.component';
import { ColumnNumberComponent } from './components/columns/column-number/column-number.component';
import { ColumnStringComponent } from './components/columns/column-string/column-string.component';
import { DynamicComponent } from './components/dynamic-component';
import { FieldBooleanComponent } from './components/fields/field-boolean/field-boolean.component';
import { FieldDateComponent } from './components/fields/field-date/field-date.component';
import { FieldNumberComponent } from './components/fields/field-number/field-number.component';
import { FieldStringComponent } from './components/fields/field-string/field-string.component';
import { DataGridComponent } from './components/widgets/data-grid/data-grid.component';
import { EditorComponent } from './components/widgets/editor/editor.component';
import { QueryToolbarComponent } from './components/widgets/query-toolbar/query-toolbar.component';
import { FormGroupGenerateService } from './core/widgets/form-group-generate.service';
import { DynamicDirective } from './directives/dynamic.directive';
import { DynamicDtoPageComponent } from './pages/dynamic-dto-page/dynamic-dto-page.component';
import { ComponentRegisterFactory } from './services/component-register-factory';
import { ComponentRegisterProvider } from './services/component-register-provicer';
import { EntityResolveMetaConfigService } from './services/entity-resovle-meta-config.service';
import { ValidService } from './services/valid.service';

const COMPONENTS = [
  FieldStringComponent,
  DynamicComponent,
  ColumnStringComponent,
  DataGridComponent,
  ColumnDateComponent,
  ColumnBooleanComponent,
  QueryToolbarComponent,
  EditorComponent,
  ColumnNumberComponent,
  DynamicDtoPageComponent,
  FieldBooleanComponent,
  FieldDateComponent,
  FieldNumberComponent,
];

@NgModule({
  imports: [SharedModule],
  declarations: [...COMPONENTS, DynamicDirective],
  exports: [
    ...COMPONENTS,
    EntityResolveMetaConfigService,
    ValidService,
    ComponentRegisterFactory,
    ComponentRegisterProvider,
    FormGroupGenerateService,
  ],
  entryComponents: [...COMPONENTS],
  providers: [ComponentRegisterProvider, ComponentRegisterFactory, EntityResolveMetaConfigService, ValidService, FormGroupGenerateService],
})
export class MetaUiModule {}
