import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ComponentAlias } from 'src/app/meta-ui/component-alais';
import { ComponentAliasToNameService } from 'src/app/meta-ui/services/component-alias-to-name.service';

@Component({selector: 'meta-table',
 templateUrl: './meta-table.component.html', 
 styleUrls: ['./meta-table.component.css']})
export class MetaTableComponent implements OnInit{
    visible = true;
    sql;
    data = [];

    allowEdit = false;
    primaryKey = '';
    table = '';
    columnTypeSelect = [];
    fieldTypeSelect = [];

  constructor(private httpClient: HttpClient, private  componentAliasToNameService: ComponentAliasToNameService){
    this.columnTypeSelect = this.componentAliasToNameService.columnTypeSNameMapping;
    this.fieldTypeSelect = this.componentAliasToNameService.fieldTypeMapping;

  }
  async  submit(){
     const data =   await this.httpClient.get(`/assets/data/query.json`).toPromise() as any;
     this.data = data;
     this.data.forEach(item => {
       item.componentAlias = this.dataBaseTypeToDefaultType(item.type);
       item.fieldComponentAlias= this.dataBaseTypeToFieldType(item.type);

     }
     );
    }
    ngOnInit(){
      this.submit();
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

}
