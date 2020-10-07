import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminUiDecoratorDocComponent } from './docs/admin-ui-decorator-doc/admin-ui-decorator-doc.component';
import { TreeViewDocComponent } from './docs/admin-ui-decorator-doc/components/tree-view-doc/tree-view-doc.component';
import { AdminUiMetaDataDocComponent } from './docs/admin-ui-meta-data-doc/admin-ui-meta-data-doc.component';
import { ServerDecoratorDocComponent } from './docs/server-decorator-doc/server-decorator-doc.component';
import { DynamicPageComponent } from './dynamic-page/dynamic-page.component';
import { JsonEditorComponent } from './json-editor/json-editor.component';
import { SqlGeneratePageComponent } from './tools/sql-generate-page/sql-generate-page.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: DynamicPageComponent },
      { path: 'dynamic/:entity', component: DynamicPageComponent },
      {path: 'doc/admin-ui-meta-data-doc', component: AdminUiMetaDataDocComponent},
      {path: 'doc/admin-ui-decorator-doc', component: AdminUiDecoratorDocComponent},
      {path: 'doc/admin-ui-decorator-doc/tree-view-doc', component: TreeViewDocComponent},
      {path: 'doc/server-decorator-doc', component: ServerDecoratorDocComponent},
      {path: 'tools/sql-generate-page', component: SqlGeneratePageComponent},
      {path: 'tools/json-editor', component: JsonEditorComponent},
      
      
      
    ]),
  ],
  declarations: [],
  exports: [RouterModule],
})
export class DeveloperRoutingModule {}
