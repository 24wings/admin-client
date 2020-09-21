import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { MarkdownModule } from 'ngx-markdown';
// import { JsonEditorModule } from 'ng2-json-editor';
import { ColumnBooleanComponent } from './components/columns/column-boolean/column-boolean.component';
import { ColumnDateComponent } from './components/columns/column-date/column-date.component';
import { ColumnNumberComponent } from './components/columns/column-number/column-number.component';
import { ColumnStringComponent } from './components/columns/column-string/column-string.component';
import { DataManagerComponent } from './components/data/data-manager/data-manager.component';
import { DynamicComponent } from './components/dynamic-component';
import { FieldBooleanComponent } from './components/fields/field-boolean/field-boolean.component';
import { FieldDateComponent } from './components/fields/field-date/field-date.component';
import { FieldNumberComponent } from './components/fields/field-number/field-number.component';
import { FieldStringComponent } from './components/fields/field-string/field-string.component';
import { DataGridComponent } from './components/widgets/data-grid/data-grid.component';
import { EditorComponent } from './components/widgets/editor/editor.component';
import { MetaJsonComponent } from './components/widgets/meta-json/meta-json.component';
import { QueryToolbarComponent } from './components/widgets/query-toolbar/query-toolbar.component';
import { TreeViewComponent } from './components/widgets/tree-view/tree-view.component';
import { FormGroupGenerateService } from './core/widgets/form-group-generate.service';
import { DynamicDirective } from './directives/dynamic.directive';
import { DynamicDtoPageComponent } from './pages/dynamic-dto-page/dynamic-dto-page.component';
import { DictionaryPipe } from './pipes/dictionary.pipe';
import { ComponentRegisterFactory } from './services/component-register-factory';
import { ComponentRegisterProvider } from './services/component-register-provicer';
import { DataQueryService } from './services/data-query.service';
import { EntityResolveMetaConfigService } from './services/entity-resovle-meta-config.service';
import { IndexdbService } from './services/indexdb.service';
import { LocalDbService } from './services/local-db.server';
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
  MetaJsonComponent,
  DataManagerComponent,
  TreeViewComponent
];

@NgModule({
  imports: [SharedModule,
    MarkdownModule.forChild()
    // JsonEditorModule
  ],
  declarations: [...COMPONENTS, DynamicDirective,DictionaryPipe],
  exports: [
    ...COMPONENTS,
 
   
  ],
  
  entryComponents: [...COMPONENTS],
  providers: [
    ComponentRegisterProvider,
     ComponentRegisterFactory,
      EntityResolveMetaConfigService,
      ValidService,
       FormGroupGenerateService,
    IndexdbService,
    LocalDbService,
    DataQueryService
    ],
})
export class MetaUiModule {}
