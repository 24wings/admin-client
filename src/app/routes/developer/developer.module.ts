import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { MarkdownModule } from 'ngx-markdown';

import { MetaUiModule } from 'src/app/meta-ui/meta-ui.module';
import { DeveloperRoutingModule } from './developer-routing.module';
import { AdminUiDecoratorDocComponent } from './docs/admin-ui-decorator-doc/admin-ui-decorator-doc.component';
import { AdminUiMetaDataDocComponent } from './docs/admin-ui-meta-data-doc/admin-ui-meta-data-doc.component';
import { DynamicPageComponent } from './dynamic-page/dynamic-page.component';


const COMPONENTS = [DynamicPageComponent, AdminUiMetaDataDocComponent, AdminUiDecoratorDocComponent];

@NgModule({
  imports: [SharedModule, MetaUiModule, DeveloperRoutingModule, MarkdownModule.forRoot( )],
  declarations: [...COMPONENTS],
  entryComponents: [...COMPONENTS],
})
export class DeveloperModule {}
