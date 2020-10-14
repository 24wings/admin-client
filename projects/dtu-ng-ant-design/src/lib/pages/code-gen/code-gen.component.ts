import { Component, Input } from '@angular/core';
import { CodeGenService } from '../../services/code-gen.service';
import { EntityResolveMetaConfigService } from '../../services/entity-resovle-meta-config.service';

@Component({selector: 'code-gen', templateUrl: './code-gen.component.html',styleUrls:['./code-gen.component.css']})
export class CodeGenComponent{
    @Input() type;
    config;
    constructor(private entityResolveMetaConfigService: EntityResolveMetaConfigService, private codeGen: CodeGenService){
    }
    code;
    html;
    css;
    ngOnInit(){
      this.config =  this.entityResolveMetaConfigService.resolveDataGrid(this.type);
      const result =  this.codeGen.resolveDataGridComponentCode(this.config);
      this.code = result.code;
      this.html = result.html;
      this.css = result.css;
    }

    copy(text){
     const divEl= document.createElement('textarea');
     divEl.value=text;
     divEl.style.visibility='none';
     document.body.appendChild(divEl);
     divEl.select();
     document.execCommand("Copy");

    }
    
}
