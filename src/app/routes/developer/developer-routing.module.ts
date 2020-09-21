import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminUiDecoratorDocComponent } from './docs/admin-ui-decorator-doc/admin-ui-decorator-doc.component';
import { TreeViewDocComponent } from './docs/admin-ui-decorator-doc/components/tree-view-doc/tree-view-doc.component';
import { AdminUiMetaDataDocComponent } from './docs/admin-ui-meta-data-doc/admin-ui-meta-data-doc.component';
import { DynamicPageComponent } from './dynamic-page/dynamic-page.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: DynamicPageComponent },
      { path: 'dynamic/:entity', component: DynamicPageComponent },
      {path: 'doc/admin-ui-meta-data-doc', component: AdminUiMetaDataDocComponent},
      {path: 'doc/admin-ui-decorator-doc', component: AdminUiDecoratorDocComponent},
      {path: 'doc/admin-ui-decorator-doc/tree-view-doc', component: TreeViewDocComponent},
      
      
    ]),
  ],
  declarations: [],
  exports: [RouterModule],
})
export class DeveloperRoutingModule {}
