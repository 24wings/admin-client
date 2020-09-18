import { Component, Injector, Input, OnInit } from '@angular/core';
import { DataManagerConfig } from 'src/app/meta-ui/core/data/data-manager-config';
import { BasicDataManager } from 'src/app/meta-ui/data/basic-data-manager';
import { CommonPagedResponse } from 'src/app/meta-ui/data/http/common-paged-response';
import { CommonResponse } from 'src/app/meta-ui/data/http/common-response';
import { QueryObject } from 'src/app/meta-ui/data/query/query-object';
import { BasicAdapter } from 'src/app/meta-ui/services/adapters/basic-adapter';
import { LocalAdapter } from 'src/app/meta-ui/services/adapters/local-adapter';
import { UrlAdapter } from 'src/app/meta-ui/services/adapters/url.adapter';
import { LocalDbService } from 'src/app/meta-ui/services/local-db.server';

@Component({selector: 'data-manager', templateUrl: './data-manager.component.html'})
export class DataManagerComponent extends BasicDataManager implements OnInit{
   
    @Input() config: DataManagerConfig;
    @Input() adapterInstance: BasicAdapter;
    constructor(private injector: Injector, private localDbService: LocalDbService){super(); }

    ngOnInit(){
        debugger;
        if (!this.adapterInstance){
        switch (this.config.adapter){
            case 'url':
                this.adapterInstance = new UrlAdapter(this.injector);
                
                break;
            case 'local':
                this.adapterInstance = new LocalAdapter(this.injector);
                this.createTable();
                break;
        }
    }

    }
    load(queryObject: QueryObject): Promise<CommonPagedResponse> {
        return this.adapterInstance.load(queryObject, this );
    }
    loadDetail(queryObject: QueryObject): Promise<CommonResponse> {
        return this.adapterInstance.loadDetail(queryObject, this );
    }
    insert(data: any): Promise<CommonResponse> {
        return this.adapterInstance.loadDetail(data, this );
    }
    update(data: any): Promise<CommonResponse> {
        return this.adapterInstance.loadDetail(data, this );
    }
    remove(data: any): Promise<CommonResponse> {
        return this.adapterInstance.loadDetail(data, this );
    }

    createTable() {
        this.localDbService.createTable(this.config);
    }
}
