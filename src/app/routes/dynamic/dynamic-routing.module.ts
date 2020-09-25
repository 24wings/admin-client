import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DecoratorPageComponent } from './pages/decorator-page/decorator-page.component';
import { SqlPageComponent } from './pages/sql-page/sql-page.component';

@NgModule({
    
    imports: [RouterModule.forChild([
        {path: 'page/meta/:objectCode', component: SqlPageComponent},
        {path: 'page/decorator/:className', component: DecoratorPageComponent},
        
    ])],
    exports: [RouterModule]
})
export class DynamicRoutingModule{

}
