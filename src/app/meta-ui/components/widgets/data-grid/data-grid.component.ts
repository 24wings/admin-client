import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { DataGridConfig } from 'src/app/meta-ui/core/widgets/data-grid-config';

@Component({ selector: 'data-grid', templateUrl: './data-grid.component.html' })
export class DataGridComponent {
  constructor(private httpClient: HttpClient) {}
  @Input() config: DataGridConfig;
  @Input() data: any[];
  selectedRecord: any;
  checked = false;
  loading = false;
  indeterminate = false;
  setOfCheckedId = new Set<number>();
  total = 0;
  onAllChecked(checked: boolean): void {
    this.data.filter(({ disabled }) => !disabled).forEach(({ id }) => this.updateCheckedSet(id, checked));
    this.refreshCheckedStatus();
  }
  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }
  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onCurrentPageDataChange(listOfCurrentPageData: any[]): void {
    this.data = listOfCurrentPageData;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    const listOfEnabledData = this.data.filter(({ disabled }) => !disabled);
    this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
    this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
  }
}
