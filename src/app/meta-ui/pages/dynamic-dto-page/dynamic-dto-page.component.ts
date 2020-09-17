import { Component, Input, OnInit } from '@angular/core';
import { EntityResolveMetaConfigService } from '../../services/entity-resovle-meta-config.service';

@Component({ selector: 'dynamic-dto-page', templateUrl: './dynamic-dto-page.component.html' })
export class DynamicDtoPageComponent implements OnInit {
  @Input() entity;
  @Input() data;
  selectedConfig;

  constructor(private entityResolveMetaConfigService: EntityResolveMetaConfigService) {}
  ngOnInit() {
    this.selectedConfig = this.entityResolveMetaConfigService.resolvelEntity(this.entity);
  }
}
