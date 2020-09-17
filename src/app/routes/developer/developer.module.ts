import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { MetaUiModule } from 'src/app/meta-ui/meta-ui.module';
import { DeveloperRoutingModule } from './developer-routing.module';
import { DynamicPageComponent } from './dynamic-page/dynamic-page.component';

const COMPONENTS = [DynamicPageComponent];

@NgModule({
  imports: [SharedModule, MetaUiModule, DeveloperRoutingModule],
  declarations: [...COMPONENTS],
  entryComponents: [...COMPONENTS],
})
export class DeveloperModule {}
