import { Component, Input, OnInit } from '@angular/core';
import { ColumnStringConfig } from '../../../core/columns/column-string-config';
import { ColumnTreeConfig } from '../../../core/columns/column-tree-config';
import { TreeUtilService } from '../../../services/tree-uitl.service';

@Component({
  selector: 'column-tree',
  templateUrl: './column-tree.component.html',
})
export class ColumnTreeComponent {
  @Input() config: ColumnTreeConfig;
  @Input() data: any;
  nodes = [];
  constructor(private treeUtil: TreeUtilService){}
  ngOnInit(){
      if(this.data[this.config.key]){
        this.nodes = this.treeUtil.list2Tree(this.data[this.config.key], this.config.idKey, this.config.parentKey, this.config.displayKey);
      }
      
  }
}
