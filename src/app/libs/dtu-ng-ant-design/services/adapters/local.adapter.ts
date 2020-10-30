import { Injector } from '@angular/core';
import { BasicDataManager } from '../../data/basic-data-manager';
import { CommonPagedResponse } from '../../data/http/common-paged-response';
import { CommonResponse } from '../../data/http/common-response';
import { QueryObject } from '../../data/query/query-object';
import { DataQueryService } from '../data-query.service';
import { IndexdbService } from '../indexdb.service';
import { LocalDbService } from '../local-db.server';
import { BasicAdapter } from './basic-adapter';

export class LocalAdapter extends BasicAdapter{
    indexDbService: IndexdbService;
    localDbService: LocalDbService;
    dataQueryService: DataQueryService;

    

    async loadDetail(queryObject: QueryObject, dataManager?: BasicDataManager): Promise<CommonResponse> {
        const data = await  this.localDbService.load(dataManager.table, queryObject);
        const items = this.dataQueryService.query(data.data.items, queryObject);
        data.data.items = items;
        return data;
    }
    insert(data: any, dataManager?: BasicDataManager): Promise<CommonResponse> {
        return this.localDbService.insert(dataManager.table, data);
    }
    update(data: any, dataManager?: BasicDataManager): Promise<CommonResponse> {
        return this.localDbService.update(dataManager.table, data);
    }
    remove(data: any, dataManager?: BasicDataManager): Promise<CommonPagedResponse> {
        return this.localDbService.remove(dataManager.table, data);
    }

  async   load(queryObject: QueryObject, dataManager: BasicDataManager): Promise<CommonPagedResponse>{
        const data = await  this.localDbService.load(dataManager.table, queryObject);
        const items = this.dataQueryService.query(data.data.items, queryObject);
        data.data.items = items;
        return data;
    }
    constructor(injector: Injector){
        super(injector);
        this.indexDbService = injector.get(IndexdbService);
        this.localDbService = injector.get(LocalDbService);
        this.dataQueryService = injector.get(DataQueryService);
    }


}
