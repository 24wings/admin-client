import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { DtuNgAntDesignModule } from 'src/app/libs/dtu-ng-ant-design/dtu-ng-ant-design.module';
import { TreeCheckedComponent } from './components/tree-checked/tree-checked.component';
import { MainRoutingModule } from './main-routing.module';
import { StablePageComponent } from './pages/stable-page/stable-page.component';

@NgModule({imports: [SharedModule, DtuNgAntDesignModule, MainRoutingModule],
    declarations: [StablePageComponent,TreeCheckedComponent]
})
export class MainModule{

}
