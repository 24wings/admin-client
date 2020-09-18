import { Component } from '@angular/core';
import { STColumn } from '@delon/abc/st';


interface ComDef{
    component: string;
    type: string;
    summary: string;
    propertys: {key: string, type: string, summary: string, required?: boolean}[];
}

@Component({
  selector: 'admin-ui-meta-data-doc',
  templateUrl: './admin-ui-meta-data-doc.component.html',
})
export class AdminUiMetaDataDocComponent {
    keyword = '';
  columns: STColumn[] = [
    {index: 'component', title: '组件'},
    {index: 'type', title: '类型'},
    {index: 'summary', title: '简述'},
    {index: 'propertys', title: '属性数量', format: (item: any) => item.propertys.length + ''},
      
  ];
  dataList: ComDef[] = [
      {component: 'DataGridConfig', summary: '表格', type: 'DataGrid', propertys: [
        {key: 'componentAlias', summary: '组件别名', type: '常量DataGrid', required:true},
        {key: 'title', type: 'string', summary: '页面标题',required:true},
        {key: 'columns', type: 'BasicColumn[]', summary: '表格列',required:true},
        {key: 'loadUrl', type: 'string', summary: '数据加载Url'},
        {key: 'queryToolbar', type: 'QueryToolbarConfig', summary: '查询工具条'},
        {key: 'editor', type: 'EditorConfig', summary: '表单'}
      ]}
  ];
  displayDataList = this.dataList.map(item => item);
  subTableColumns: STColumn[] = [
    {index: ''},
    {index: 'key', title: '属性'},
    {index: 'type', title: '类型'},
    {index: 'summary', title: '简述'},
    {index: 'required', title: '必填', type: 'yn'}
  ];
  search(){
    this.displayDataList = this.dataList.filter(item => item.component.indexOf(this.keyword) !== -1);
  }
}
