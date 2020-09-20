import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { EntityResolveMetaConfigService } from 'src/app/meta-ui/services/entity-resovle-meta-config.service';

@Component({selector: 'meta-json', templateUrl: './meta-json.component.html'})
export class MetaJsonComponent implements OnInit, AfterViewInit{
    @Input()entity;
    constructor(private entityResolveMetaConfigService: EntityResolveMetaConfigService){}
    meta;
    data;

    ngOnInit(){
     
    }
    ngAfterViewInit(){
        this.meta =      this.entityResolveMetaConfigService.resolvelEntity(this.entity || this.entity);
        this.data = 
  `\`\`\`json
  ` + JSON.stringify(this.meta) + `
  \`\`\``;
    }
    
}
