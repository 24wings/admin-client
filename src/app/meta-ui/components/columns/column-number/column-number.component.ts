import { Component, Input } from '@angular/core';
import { BasicColumn } from 'src/app/meta-ui/core/basic-column';

@Component({ selector: 'column-number', templateUrl: './column-number.component.html' })
export class ColumnNumberComponent {
  @Input() config: BasicColumn;
  @Input() data: any;
}
