import { Component } from '@angular/core';
import { EntityResolveMetaConfigService } from 'dtu-ng-ant-design';
import { BasicDataGrid } from '../dto-pages/basic-data-grid';

@Component({selector: 'code-generate', templateUrl: './code-generate.component.html'})
export class CodeGenerateComponent{
    config;
    BasicDataGrid=BasicDataGrid;
    constructor(){
    }

}
