import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { DtuNgAntDesignModule } from 'dtu-ng-ant-design';
import { MainRoutingModule } from './main-routing.module';
import { StablePageComponent } from './pages/stable-page/stable-page.component';

@NgModule({imports: [SharedModule, DtuNgAntDesignModule, MainRoutingModule],
    declarations: [StablePageComponent]
})
export class MainModule{

}
