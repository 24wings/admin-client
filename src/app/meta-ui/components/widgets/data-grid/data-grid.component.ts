import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import * as _ from 'loadsh';
import { BasicColumn } from 'src/app/meta-ui/core/basic-column';
import { DataGridConfig } from 'src/app/meta-ui/core/widgets/data-grid-config';
import { DataManagerComponent } from '../../data/data-manager/data-manager.component';
@Component({ selector: 'data-grid', templateUrl: './data-grid.component.html' })
export class DataGridComponent implements OnInit, AfterViewInit{
  
  @Input() config: DataGridConfig;
  @Input() data: any[];
  @ViewChild('dataManager') dataManager: DataManagerComponent;
  selectedRecord: any;
  checked = false;
  loading = false;
  indeterminate = false;
  setOfCheckedId = new Set<number>();
  total = 0;
  editorMode: 'insert'|'update';
  sortByField?: string;
  orderBy: 'ascend'|'descend';
  pageIndex = 1;
  constructor(private httpClient: HttpClient) {

  }
 
  sortBy(column){
      this.sortByField = column.key;
      this.orderBy = column.sortOrder;
      this.refresh();
       
  }
 async  ngOnInit(){



  }
  async ngAfterViewInit(){
    // if (!this.config.selection === false ){
    //   this.config.selection = true;
    // }
    // this.config.pageSize = this.config.pageSize || 10;
 
    await this.refresh();
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
 async  refresh(){
   const orderBy = {
     key: this.sortByField,
   sort: this.orderBy
  };
   const result = await this.dataManager.load({orderBy, take: this.config.pageSize || 10, skip: (this.pageIndex - 1) * (this.config.pageSize || 10)});
   this.data = result.data.items;
   this.total = result.data.total;
  }
 async delete(data){
   await this.dataManager.remove(data);
   
   await  this.refresh();
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
