import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataGridConfig, EntityResolveMetaConfigService } from 'projects/dtu-ng-ant-design/src/public-api';

import { pageMappings } from '../dto-pages';
import { BasicUser } from '../dto-pages/basic-user';

@Component({ selector: 'dynamic-page', templateUrl: './dynamic-page.component.html' })
export class DynamicPageComponent implements OnInit {
  selectedConfig: DataGridConfig;
  entity;

  dataGridData = [{ id: 1, name: 'aaa', birthDate: new Date(), age: 17 }];

  pageMappings: { name: string; entity: new () => any }[] = pageMappings;
  constructor(private route: ActivatedRoute, private entityResolveMetaConfigService: EntityResolveMetaConfigService) {}
  ngOnInit() {
    this.entity = this.pageMappings.find((page) => page.name === this.route.snapshot.params.entity);
  }
}
