import { Injector } from '@angular/core';
import { BasicDataManager } from '../../data/basic-data-manager';
import { CommonResponse } from '../../data/http/common-response';
import { QueryObject } from '../../data/query/query-object';

export abstract class BasicAdapter extends BasicDataManager {

    abstract load(queryObject: QueryObject, dataManager?: BasicDataManager): Promise<CommonResponse>;
    abstract loadDetail(queryObject: QueryObject, dataManager?: BasicDataManager): Promise<CommonResponse>;
    abstract insert(data: any, dataManager?: BasicDataManager): Promise<CommonResponse>;
    abstract update(data: any, dataManager?: BasicDataManager): Promise<CommonResponse>;
    abstract remove(data: any, dataManager?: BasicDataManager): Promise<CommonResponse>;
    
   

    constructor(injector: Injector){super()}
}
