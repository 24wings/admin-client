import { Injector } from '@angular/core';
import { DataManagerConfig } from '../../core/data/data-manager-config';
import { BasicDataManager } from '../../data/basic-data-manager';
import { CommonResponse } from '../../data/http/common-response';
import { QueryObject } from '../../data/query/query-object';

export abstract class BasicAdapter extends BasicDataManager {

    abstract load(queryObject: QueryObject, dataManager?: DataManagerConfig): Promise<CommonResponse>;
    abstract loadDetail(queryObject: QueryObject, dataManager?: DataManagerConfig): Promise<CommonResponse>;
    abstract insert(data: any, dataManager?: DataManagerConfig): Promise<CommonResponse>;
    abstract update(data: any, dataManager?: DataManagerConfig): Promise<CommonResponse>;
    abstract remove(data: any, dataManager?: DataManagerConfig): Promise<CommonResponse>;
    
   

    constructor(injector: Injector){super()}
}
