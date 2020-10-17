import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { AppSettingsService } from './app-settings.service';
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
import { NgPageGridComponent } from './layout/ng-page-grid.component';
import { NgPageHeaderWrapperComponent } from './layout/ng-page-header.component';
import { CodeGenComponent } from './pages/code-gen/code-gen.component';
import { DynamicDtoPageComponent } from './pages/dynamic-dto-page/dynamic-dto-page.component';
import { DynamicServerDtoPageComponent } from './pages/dynamic-server-dto-page/dynamic-server-dto-page.component';
import { CodeGenService } from './services/code-gen.service';
import { ComponentAliasToNameService } from './services/component-alias-to-name.service';
import { ComponentRegisterFactory } from './services/component-register-factory';
import { ComponentRegisterProvider } from './services/component-register-provicer';
import { DataQueryService } from './services/data-query.service';
import { EntityResolveMetaConfigService } from './services/entity-resovle-meta-config.service';
import { IndexdbService } from './services/indexdb.service';
import { LocalDbService } from './services/local-db.server';
import { TreeUtilService } from './services/tree-uitl.service';
import { ValidService } from './services/valid.service';
import { SHARED_DELON_MODULES } from './shared-delon.module';
import { SHARED_ZORRO_MODULES } from './zorro.module';


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
  TreeViewComponent,
  DynamicServerDtoPageComponent,
  NgPageHeaderWrapperComponent,
  NgPageGridComponent,
  DynamicDirective,
  CodeGenComponent
];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    ...SHARED_DELON_MODULES,
    ...SHARED_ZORRO_MODULES,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MarkdownModule,
    CommonModule
  ],
  
  exports: [...COMPONENTS],
  providers: [ 
    AppSettingsService,
    ComponentRegisterProvider,
    ComponentRegisterFactory,
     EntityResolveMetaConfigService,
     ValidService,
      FormGroupGenerateService,
   IndexdbService,
   LocalDbService,
   DataQueryService,
   TreeUtilService,
   ComponentAliasToNameService,
   CodeGenService]
})
export class DtuNgAntDesignModule { 

  public static forChild(): ModuleWithProviders{
    return {
      ngModule: DtuNgAntDesignModule,
      providers: [ AppSettingsService,
        ComponentRegisterProvider,
        ComponentRegisterFactory,
         EntityResolveMetaConfigService,
         ValidService,
          FormGroupGenerateService,
       IndexdbService,
       LocalDbService,
       DataQueryService,
       TreeUtilService,
       ComponentAliasToNameService,
       CodeGenService,
      ],
    
    };
  }

}
