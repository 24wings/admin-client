import { Injectable } from '@angular/core';
import { ComponentAlias } from '../component-alais';

@Injectable()
export class ComponentAliasToNameService{
    columnTypeSNameMapping = [
        {name: ComponentAlias.ColumnNumber, value: '数字列'},
        {name: ComponentAlias.ColumnString, value: '字符串'},
        {name: ComponentAlias.ColumnDate, value: '日期列'},
        {name: ComponentAlias.ColumnBoolean, value: 'Boolean列'}
    
    ];
    fieldTypeMapping = [
        {name: ComponentAlias.FieldString, value: '文本框'},
        {name: ComponentAlias.FieldBoolean, value: 'Checkbox'},
        {name: ComponentAlias.FieldNumber, value: '数字框'},
        
    ];

    toName(componentAlias: ComponentAlias){

        switch (componentAlias){
            case ComponentAlias.ColumnNumber:
                return '数字列';
            case ComponentAlias.ColumnString:
                return '字符串';
            case ComponentAlias.ColumnDate:
                return  '日期列';
            case ComponentAlias.ColumnBoolean:
                return 'Boolean列';
            case  ComponentAlias.FieldBoolean:
                return '选择框';
            case ComponentAlias.FieldDate:
                return '日期框';
            case ComponentAlias.FieldNumber:
                return '数字框';
            case ComponentAlias.FieldString:
                return '文本框';

            case ComponentAlias.DataGrid:
                return '数据表格';
            case ComponentAlias.TreeView:
                return '树形控件';
            
        }
    }

    

}
