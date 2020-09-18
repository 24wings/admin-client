import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminUiMetaDataDocComponent } from './docs/admin-ui-meta-data-doc/admin-ui-meta-data-doc.component';
import { DynamicPageComponent } from './dynamic-page/dynamic-page.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: DynamicPageComponent },
      { path: 'dynamic/:entity', component: DynamicPageComponent },
      {path:'doc/admin-ui-meta-data-doc',component:AdminUiMetaDataDocComponent}
    ]),
  ],
  declarations: [],
  exports: [RouterModule],
})
export class DeveloperRoutingModule {}
