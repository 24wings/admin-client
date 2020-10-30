import { Component, Input } from '@angular/core';
import { ColumnDateConfig } from '../../../core/columns/column-date-config.component';

@Component({ selector: 'column-date', templateUrl: './column-date.component.html' })
export class ColumnDateComponent {
  @Input() config: ColumnDateConfig;
  @Input() data: any;
  defaultFormat = 'yyyy-MM-dd';
  get format() {
    return this.config.format ? this.config.format : this.defaultFormat;
  }
}
