import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { MarkdownModule } from 'ngx-markdown';
import { DtuNgAntDesignModule, EntityResolveMetaConfigService } from 'projects/dtu-ng-ant-design/src/public-api';
import { CodeGenerateComponent } from './code-generate/code-generate.component';

import { DeveloperRoutingModule } from './developer-routing.module';
import { AdminUiDecoratorDocComponent } from './docs/admin-ui-decorator-doc/admin-ui-decorator-doc.component';
import { TreeViewDocComponent } from './docs/admin-ui-decorator-doc/components/tree-view-doc/tree-view-doc.component';
import { AdminUiMetaDataDocComponent } from './docs/admin-ui-meta-data-doc/admin-ui-meta-data-doc.component';
import { ServerDecoratorDocComponent } from './docs/server-decorator-doc/server-decorator-doc.component';
import { DynamicPageComponent } from './dynamic-page/dynamic-page.component';
import { JsonEditorComponent } from './json-editor/json-editor.component';
import { MetaTableComponent } from './tools/sql-generate-page/meta-table/meta-table.component';
import { SqlGeneratePageComponent } from './tools/sql-generate-page/sql-generate-page.component';


const COMPONENTS = [DynamicPageComponent, AdminUiMetaDataDocComponent, AdminUiDecoratorDocComponent, TreeViewDocComponent, 
  ServerDecoratorDocComponent,SqlGeneratePageComponent,MetaTableComponent
,JsonEditorComponent,CodeGenerateComponent];

@NgModule({
  imports: [SharedModule, DtuNgAntDesignModule.forChild(), DeveloperRoutingModule, MarkdownModule.forRoot( )],
  declarations: [...COMPONENTS],
  entryComponents: [...COMPONENTS],
  providers:[]
})
export class DeveloperModule {}
