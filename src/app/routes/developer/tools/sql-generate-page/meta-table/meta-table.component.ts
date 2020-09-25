import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ComponentAlias } from 'src/app/meta-ui/component-alais';
import { BasicColumn } from 'src/app/meta-ui/core/basic-column';
import { DataManagerConfig } from 'src/app/meta-ui/core/data/data-manager-config';
import { DataGridConfig } from 'src/app/meta-ui/core/widgets/data-grid-config';
import { EditorConfig } from 'src/app/meta-ui/core/widgets/editor-config';
import { TreeViewConfig } from 'src/app/meta-ui/core/widgets/tree-view-config';
import { TreeView } from 'src/app/meta-ui/decorators/widgets/tree-view';
import { ComponentAliasToNameService } from 'src/app/meta-ui/services/component-alias-to-name.service';

@Component({selector: 'meta-table',
 templateUrl: './meta-table.component.html', 
 styleUrls: ['./meta-table.component.css']})
export class MetaTableComponent implements OnInit{
    visible = true;
    sql;
    data: any[] = [];
    pageTitle = '';
    groupName = '';

    allowEdit = false;
    primaryKey = '';
    componentAlias: ComponentAlias = ComponentAlias.DataGrid;
    table = '';
    columnTypeSelect = [];
    fieldTypeSelect = [];
    firstLoad = true;
    objectCode: string;
    parentKey;
    ComponentAlias = ComponentAlias;
    controlType: {label: string, value: string}[] = [
      {label: '表格', value: ComponentAlias.DataGrid},
      {label: '树形控件', value: ComponentAlias.TreeView}
    ];
    metaObject;

  constructor(private httpClient: HttpClient, private  componentAliasToNameService: ComponentAliasToNameService){
    this.columnTypeSelect = this.componentAliasToNameService.columnTypeSNameMapping;
    this.fieldTypeSelect = this.componentAliasToNameService.fieldTypeMapping;

  }
  async  submit(){
   await this.httpClient.post('http://localhost:8080/api/sql/add', {objectCode: this.objectCode,
   config: JSON.stringify(this.metaObject),
   pkKey: this.primaryKey,
   groupName: this.groupName,
   querySql: this.sql,
   tableName:this.table
  }).toPromise();
    }
   async  queryInfo(){
      const data =   await this.httpClient.post(`http://localhost:8080/api/sql/parse`, {sql: this.sql}).toPromise() as any;
      this.data = data;
      this.data.forEach(item => {
        item.componentAlias = this.dataBaseTypeToDefaultType(item.type);
        item.fieldComponentAlias = this.dataBaseTypeToFieldType(item.type);
 
      }
      );

    }
    reset(){
      this.sql = '';
      this.data = [];
    }

  async  loadByMock(){
      const data =   await this.httpClient.get(`/assets/data/query.json`).toPromise() as any;
      this.data = data;
      this.data.forEach(item => {
        item.componentAlias = this.dataBaseTypeToDefaultType(item.type);
        item.fieldComponentAlias = this.dataBaseTypeToFieldType(item.type);
 
      }
      );
    }
    ngOnInit(){
    }


    dataBaseTypeToDefaultType(columnType: string){
      switch (columnType) {
        case 'VARCHAR':
          return ComponentAlias.ColumnString;
          case 'BIT':
            return ComponentAlias.ColumnBoolean;
          case 'INT':
            return ComponentAlias.ColumnNumber;
        default:
          break;
      }

    }
    dataBaseTypeToFieldType(columnType){
      switch (columnType) {
        case 'VARCHAR':
            return ComponentAlias.FieldString;
          case 'BIT':
          return ComponentAlias.FieldBoolean;
        default:
            return ComponentAlias.FieldNumber;
          
      }
    }
    resolve(){
      if (this.componentAlias === ComponentAlias.DataGrid){
      const dataManager =  new DataManagerConfig();
      dataManager.adapter = 'sql';
      dataManager.table = this.objectCode;
      dataManager.autoLoad = true;
      dataManager.autoInsert = this.allowEdit;
      
      const dataGridConfig =  new DataGridConfig();
      dataGridConfig.componentAlias = this.componentAlias;
      dataGridConfig.title = this.pageTitle;
      dataGridConfig.columns = this.data.map(item => { 
        const column = new BasicColumn();
        column.label = item.label || item.key;
        column.componentAlias = item.componentAlias;
        column.key = item.field;
        return column;
      });
      dataGridConfig.dataManager = dataManager;
      if (this.allowEdit){
       const editor = new EditorConfig();
       editor.dataManager = dataManager;
       dataGridConfig.editor = editor;
      }
      this.metaObject = dataGridConfig;


      }else{
      const treeView =  new TreeViewConfig();
      treeView.componentAlias = ComponentAlias.TreeView;
      this.metaObject = treeView;

      }

    }

    

}
