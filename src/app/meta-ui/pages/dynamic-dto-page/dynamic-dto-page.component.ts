import { Component, Input, OnInit } from '@angular/core';
import { EntityResolveMetaConfigService } from '../../services/entity-resovle-meta-config.service';

@Component({ selector: 'dynamic-dto-page', templateUrl: './dynamic-dto-page.component.html' })
export class DynamicDtoPageComponent implements OnInit {
  @Input() entity;
  @Input() data;
  selectedConfig;
  @Input() json;

  constructor(private entityResolveMetaConfigService: EntityResolveMetaConfigService) {}
  ngOnInit() {
    if (this.entity){
      this.selectedConfig = this.entityResolveMetaConfigService.resolvelEntity(this.entity);
      
    }
  }
}
