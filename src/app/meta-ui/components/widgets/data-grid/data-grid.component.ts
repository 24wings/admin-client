import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { DataGridConfig } from 'src/app/meta-ui/core/widgets/data-grid-config';
import { DataManagerComponent } from '../../data/data-manager/data-manager.component';

@Component({ selector: 'data-grid', templateUrl: './data-grid.component.html' })
export class DataGridComponent implements OnInit, AfterViewInit{
  constructor(private httpClient: HttpClient) {}
  @Input() config: DataGridConfig;
  @Input() data: any[];
  @ViewChild('dataManager') dataManager: DataManagerComponent;
  selectedRecord: any;
  checked = false;
  loading = false;
  indeterminate = false;
  setOfCheckedId = new Set<number>();
  total = 0;
 async  ngOnInit(){


  }
  async ngAfterViewInit(){
    const result = await this.dataManager.load({});
    this.data = result.data.items;
    this.total = result.data.total;
  }
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
