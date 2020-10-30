import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NzFormatEmitEvent, NzTreeComponent } from 'ng-zorro-antd/tree';
import { FieldStringConfig } from '../../../core/fields/field-string-config';
import { FieldTreeCheckConfig } from '../../../core/fields/field-tree-check-config';
import { TreeUtilService } from '../../../services/tree-uitl.service';
import { ValidService } from '../../../services/valid.service';
import { DataManagerComponent } from '../../data/data-manager/data-manager.component';

@Component({selector: 'field-tree-check', templateUrl: './field-tree-check.component.html'})
export class FieldTreeCheckComponent implements AfterViewInit, OnInit{
    @ViewChild('dataManager') dataManager: DataManagerComponent;
    nodes = [];
    defaultSelectedKeys = [];
    @ViewChild('nzTreeComponent', { static: false }) nzTreeComponent!: NzTreeComponent;
    constructor(private treeUtilService: TreeUtilService, public valid: ValidService){}
    defaultCheckedKeys = [];
    @Input() config: FieldTreeCheckConfig;
    @Input() data: any;
    @Input() form: FormGroup;
    get isValid() {
      return this.form.controls[this.config.key].valid;
    }
    get formValue(){
        return this.form.controls[this.config.key].value;
      }
   async ngOnInit() {
     
        
     
    }
  async  ngAfterViewInit(){
        const allNodes = await this.dataManager.load({});
        this.nodes = allNodes.data.items;
        if (this.formValue){
          this.defaultCheckedKeys= this.formValue.filter(n => {

            // 找到当前节点并且当前节点是最底层节点
            const exsitNode = allNodes.data.items.find(e => e.id === n.id && !allNodes.data.items.find(current => current[this.config.parentIdKey] === n.id ));
            if (exsitNode){
              return true;
            }
          }).map(n=>n[this.config.idKey]);
        }
        // }
        // else{
        //   const exsitHalfNode = allNodes.data.items.find(e => e.id === n.id && allNodes.data.items.find(current => current[this.config.parentIdKey] === n.id || !n[this.config.parentIdKey] ));
        //   if (exsitHalfNode){
        //     exsitHalfNode.isHalfChecked = true;
        //   }
          
        // }
        this.nodes =    this.treeUtilService.list2Tree(allNodes.data.items, this.config.idKey, this.config.parentIdKey, this.config.displayKey);
        debugger;
        // this.defaultCheckedKeys=this.formValue.map(n=>n[this.config.idKey]);
    }
    nzCheck(event: NzFormatEmitEvent): void {
        console.log(event);
        console.log(this.nzTreeComponent.getCheckedNodeList());
        const checkedNodeList = this.treeUtilService. getAllTreeNodes(this.nzTreeComponent.getTreeNodes()).filter(n => n.isChecked === true || n.isHalfChecked);
        const nodes =  checkedNodeList.map(n => n.origin);
        nodes.forEach(n => delete n.children && delete n.origin.children && delete n.origin);
        debugger;
        this.form.controls.menuIds.setValue(nodes);
  
      }
}
