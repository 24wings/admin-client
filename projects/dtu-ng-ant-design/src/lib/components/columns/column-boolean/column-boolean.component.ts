import { Component, Input } from '@angular/core';
import { ColumnBooleanConfig } from '../../../core/columns/column-boolean-config.component';

@Component({ selector: 'column-boolean', templateUrl: './column-boolean.component.html' })
export class ColumnBooleanComponent {
  @Input() config: ColumnBooleanConfig;
  @Input() data: any;
}
