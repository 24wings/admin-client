import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NzFormatEmitEvent, NzTreeComponent, NzTreeNode, NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { BasicField } from 'projects/dtu-ng-ant-design/src/lib/core/basic-field';

@Component({selector: 'tree-checked', templateUrl: './tree-checked.component.html'})
export class TreeCheckedComponent{
    form: FormGroup;
    @ViewChild('nzTreeComponent', { static: false }) nzTreeComponent!: NzTreeComponent;
    defaultCheckedKeys = ['10020'];
    defaultSelectedKeys = ['10010'];
    defaultExpandedKeys = ['100', '1001'];
    constructor(){}
  
    nodes: NzTreeNodeOptions[] = [
      {
        title: 'parent 1',
        key: '100',
        children: [
          {
            title: 'parent 1-0',
            key: '1001',
            disabled: true,
            children: [
              { title: 'leaf 1-0-0', key: '10010', disableCheckbox: true, isLeaf: true },
              { title: 'leaf 1-0-1', key: '10011', isLeaf: true }
            ]
          },
          {
            title: 'parent 1-1',
            key: '1002',
            children: [
              { title: 'leaf 1-1-0', key: '10020', isLeaf: true },
              { title: 'leaf 1-1-1', key: '10021', isLeaf: true }
            ]
          }
        ]
      }
    ];
  
    nzClick(event: NzFormatEmitEvent): void {
      console.log(event);
    }
  
    nzCheck(event: NzFormatEmitEvent): void {
      console.log(event);
      console.log(this.nzTreeComponent.getCheckedNodeList());
      const checkedNodeList = this.getAllTreeNodes(this.nzTreeComponent.getTreeNodes()).filter(n => n.isChecked === true || n.isHalfChecked);
      console.log(checkedNodeList);
      this.form.controls.menuIds.setValue(checkedNodeList.map(n => n.origin));

    }
    getAllTreeNodes(nodes: NzTreeNode[]): NzTreeNode[] {
        const allNodes = [];
        nodes.forEach((node) => {
          allNodes.push(...getChildren(node));
        });
        function getChildren(node: NzTreeNode): NzTreeNode[] {
          const result = [];
          if (node.children != null) {
            if (node.children.length === 0) {
              result.push(...[node]);
            } else {
              for (const item of node.children) {
                result.push(...getChildren(item));
              }
              result.push(...[node]);
            }
      
            return result;
          } else {
            result.push(...[node]);
          }
          return result;
        }
        allNodes.forEach(n => delete n.children&& delete n.origin.children);
        return allNodes;
      }
  
    // nzSelectedKeys change
    nzSelect(keys: string[]): void {
      console.log(keys, this.nzTreeComponent.getSelectedNodeList());

    }
    get formValue(){
        return this.form.controls.menuIds.value;
      }
    ngAfterViewInit(): void {
      // get node by key: '10011'
      console.log(this.nzTreeComponent.getTreeNodeByKey('10011'));
      // use tree methods
      console.log(
        this.nzTreeComponent.getTreeNodes(),
        this.nzTreeComponent.getCheckedNodeList(),
        this.nzTreeComponent.getSelectedNodeList(),
        this.nzTreeComponent.getExpandedNodeList()
      );
      this.form = this.toFormGroup([{key: 'menuIds', required: false}]);
    }
    toFormGroup(fields: BasicField[], data: any= {}) {
        const group: any = {};
        fields.forEach((field) => {
          group[field.key] = field.required
            ? new FormControl( data[field.key] || '', Validators.required)
            : new FormControl(data[field.key] || '');
        });
        return new FormGroup(group);
      }
}
