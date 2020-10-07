import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { NzFormatEmitEvent } from 'ng-zorro-antd/tree';
import { NzTreeSelectComponent } from 'ng-zorro-antd/tree-select';
import { EditorConfig } from '../../../core/widgets/editor-config';
import { TreeViewConfig } from '../../../core/widgets/tree-view-config';
import { TreeUtilService } from '../../../services/tree-uitl.service';
import { DataManagerComponent } from '../../data/data-manager/data-manager.component';

@Component({selector: 'tree-view', templateUrl: './tree-view.component.html', styleUrls: ['./tree-view.component.css']})
export class TreeViewComponent implements AfterViewInit{
  @Input() config: TreeViewConfig;
  @ViewChild('dataManager') dataManager: DataManagerComponent;
  data = [];
  editorMode: 'insert-top'|'insert-child'|'insert-level'|'update';
  selectedRecord;
  @ViewChild('nzTreeSelect') nzTreeSelect: NzTreeSelectComponent;
  topEditor: EditorConfig;
  levelEditor: EditorConfig;
  childEditor: EditorConfig;
  newLevelRecord;
  newChildRecord;
  constructor(private treeUtilService: TreeUtilService){}
    nodes = [];
    
      nzEvent(event: NzFormatEmitEvent): void {
        console.log(event);
      }

    async   ngAfterViewInit(){
      const  topEditor = Object.assign({}, this.config.editor);
      topEditor.fields = topEditor.fields.filter(f => f.key !== this.config.parentKey);
      this.topEditor = topEditor;
      this.load();
     }

     async  load(){
       const {data} = await  this.dataManager.load({conditions: [{field: 'parentId', compare: '=', value: null, andOr: 'and'}], take: 1000, skip: 0});
       this.data = data.items;
       this.nodes =    this.treeUtilService.list2Tree(this.data, this.config.key, this.config.parentKey, this.config.displayKey);
      }
      refresh(){
        this.load();
      }
      selectRecord(){
       const selectedNode = this.nzTreeSelect.getSelectedNodeList()[0];
       if (selectedNode){
         this.selectedRecord = selectedNode.origin;
         this. levelEditor = Object.assign({}, this.config.editor);
         const newLevelRecord = {};
        
         newLevelRecord[this.config.parentKey] = this.selectedRecord[this.config.parentKey];
         this.newLevelRecord = newLevelRecord;
         this.childEditor = Object.assign({}, this.config.editor);
         const newChildRecord = {};
         newChildRecord[this.config.parentKey] = this.selectedRecord[this.config.key];
         this.newChildRecord = newChildRecord;

        }
      }
     async remove(){
       await  this.dataManager.remove(this.selectedRecord);
       await  this.refresh();
      }
}
