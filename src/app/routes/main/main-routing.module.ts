import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StablePageComponent } from './pages/stable-page/stable-page.component';

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: ':module/:page',
            component: StablePageComponent
        }
    ])]
})
export class MainRoutingModule {

}
