import { Component, Input, OnInit } from '@angular/core';
import { ColumnStringConfig } from 'src/app/meta-ui/core/columns/column-string-config';

@Component({
  selector: 'column-string',
  templateUrl: './column-string.component.html',
})
export class ColumnStringComponent {
  @Input() config: ColumnStringConfig;
  @Input() data: any;
}
