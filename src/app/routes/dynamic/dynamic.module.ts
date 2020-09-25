import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { MetaUiModule } from 'src/app/meta-ui/meta-ui.module';
import { DynamicRoutingModule } from './dynamic-routing.module';
import { DecoratorPageComponent } from './pages/decorator-page/decorator-page.component';
import { SqlPageComponent } from './pages/sql-page/sql-page.component';

@NgModule({
    declarations: [SqlPageComponent, DecoratorPageComponent ],
    imports: [SharedModule, MetaUiModule ,DynamicRoutingModule]
})
export class DynamicModule{

}
