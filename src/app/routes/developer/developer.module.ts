import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { MetaUiModule } from 'src/app/meta-ui/meta-ui.module';
import { DeveloperRoutingModule } from './developer-routing.module';
import { AdminUiMetaDataDocComponent } from './docs/admin-ui-meta-data-doc/admin-ui-meta-data-doc.component';
import { DynamicPageComponent } from './dynamic-page/dynamic-page.component';

const COMPONENTS = [DynamicPageComponent,AdminUiMetaDataDocComponent];

@NgModule({
  imports: [SharedModule, MetaUiModule, DeveloperRoutingModule],
  declarations: [...COMPONENTS],
  entryComponents: [...COMPONENTS],
})
export class DeveloperModule {}
