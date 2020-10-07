import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { DtuNgAntDesignModule } from 'projects/dtu-ng-ant-design/src/public-api';
import { DynamicRoutingModule } from './dynamic-routing.module';
import { DecoratorPageComponent } from './pages/decorator-page/decorator-page.component';
import { SqlPageComponent } from './pages/sql-page/sql-page.component';

@NgModule({
    declarations: [SqlPageComponent, DecoratorPageComponent ],
    imports: [SharedModule, DtuNgAntDesignModule.forChild() ,DynamicRoutingModule]
})
export class DynamicModule{

}
