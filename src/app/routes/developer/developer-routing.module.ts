import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DynamicPageComponent } from './dynamic-page/dynamic-page.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: DynamicPageComponent },
      { path: 'dynamic/:entity', component: DynamicPageComponent },
    ]),
  ],
  declarations: [],
  exports: [RouterModule],
})
export class DeveloperRoutingModule {}
