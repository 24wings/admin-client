import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComponentAlias } from 'src/app/meta-ui/component-alais';
import { BasicDynamicComponentConfig } from 'src/app/meta-ui/core/basic-dynamic-component.config';
import { DataGridConfig } from 'src/app/meta-ui/core/widgets/data-grid-config';
import { Column } from 'src/app/meta-ui/decorators/columns/column';
import { Field } from 'src/app/meta-ui/decorators/fields/field';
import { DataGrid } from 'src/app/meta-ui/decorators/widgets/data-grid';
import { EntityResolveMetaConfigService } from 'src/app/meta-ui/services/entity-resovle-meta-config.service';
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
