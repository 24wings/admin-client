import { Injector } from '@angular/core';
import { BasicDataManager } from '../../data/basic-data-manager';
import { CommonPagedResponse } from '../../data/http/common-paged-response';
import { CommonResponse } from '../../data/http/common-response';
import { QueryObject } from '../../data/query/query-object';
import { IndexdbService } from '../indexdb.service';
import { LocalDbService } from '../local-db.server';
import { BasicAdapter } from './basic-adapter';

export class LocalAdapter extends BasicAdapter{
    indexDbService: IndexdbService;
    localDbService: LocalDbService;

    

    loadDetail(queryObject: QueryObject, dataManager?: BasicDataManager): Promise<CommonResponse> {
        return this.localDbService.load(dataManager.table, queryObject);
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

    load(queryObject: QueryObject, dataManager: BasicDataManager): Promise<CommonPagedResponse>{
        return this.localDbService.load(dataManager.table, queryObject);
    }
    constructor(injector: Injector){
        super(injector);
        this.indexDbService = injector.get(IndexdbService);
        this.localDbService = injector.get(LocalDbService);
    }


}
