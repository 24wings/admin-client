import { Component, Injector, Input, OnInit } from '@angular/core';
import { DataManagerConfig } from '../../../core/data/data-manager-config';
import { BasicDataManager } from '../../../data/basic-data-manager';
import { CommonPagedResponse } from '../../../data/http/common-paged-response';
import { CommonResponse } from '../../../data/http/common-response';
import { QueryObject } from '../../../data/query/query-object';
import { BasicAdapter } from '../../../services/adapters/basic-adapter';
import { LocalAdapter } from '../../../services/adapters/local.adapter';
import { SqlAdapter } from '../../../services/adapters/sql.adapter';
import { UrlAdapter } from '../../../services/adapters/url.adapter';
import { LocalDbService } from '../../../services/local-db.server';


@Component({selector: 'data-manager', templateUrl: './data-manager.component.html'})
export class DataManagerComponent extends BasicDataManager implements OnInit{
   
    @Input() config: DataManagerConfig;
    @Input() adapterInstance: BasicAdapter;
    constructor(private injector: Injector, private localDbService: LocalDbService){super(); }

    ngOnInit(){
        if (!this.adapterInstance){
        switch (this.config.adapter){
            case 'url':
                this.adapterInstance = new UrlAdapter(this.injector);
                
                break;
            case 'local':
                this.adapterInstance = new LocalAdapter(this.injector);
                // this.createTable();
                break;
            case 'sql':
                this.adapterInstance = new SqlAdapter(this.injector);
        }
    }

    }
    load(queryObject: QueryObject): Promise<CommonPagedResponse> {
        return this.adapterInstance.load(queryObject, this.config );
    }
    loadDetail(queryObject: QueryObject): Promise<CommonResponse> {
        return this.adapterInstance.loadDetail(queryObject, this.config );
    }
    insert(data: any): Promise<CommonResponse> {
       const primaryKey = this.config.fields.find(key => key.isPrimaryKey).key;
       delete data[primaryKey];

       return this.adapterInstance.insert(data, this.config );
    }
    update(data: any): Promise<CommonResponse> {
        return this.adapterInstance.update(data, this.config );
    }
    remove(data: any): Promise<CommonResponse> {
       const primaryKey =  this.config.columns.find(c => c.isPrimaryKey).key;

       return this.adapterInstance.remove(data[primaryKey], this.config );
    }

    createTable() {
        // this.localDbService.createTable(this.config);
    }
}
