import { HttpClient } from '@angular/common/http';
import { Injector } from '@angular/core';
import { DataManagerConfig } from '../../core/data/data-manager-config';
import { CommonResponse } from '../../data/http/common-response';
import { QueryObject } from '../../data/query/query-object';
import { BasicAdapter } from './basic-adapter';

export class SqlAdapter extends BasicAdapter{

    


    constructor(injector: Injector){
        super(injector);
        this.httpClient =  injector.get(HttpClient);

    }
    private httpClient: HttpClient;
    load(queryObject: QueryObject, dataManager?: DataManagerConfig): Promise<CommonResponse> {
        return  this.httpClient.post<CommonResponse>(`http://localhost:8080/api/sql/query?objectCode=` + dataManager.table, queryObject).toPromise();
    }
    loadDetail(queryObject: QueryObject, dataManager?: DataManagerConfig): Promise<CommonResponse> {
        throw new Error('Method not implemented.');

    }
    insert(data: any, dataManager?: DataManagerConfig): Promise<CommonResponse> {
        throw new Error('Method not implemented.');
    }
    update(data: any, dataManager?: DataManagerConfig): Promise<CommonResponse> {
        throw new Error('Method not implemented.');
    }
    remove(data: any, dataManager?: DataManagerConfig): Promise<CommonResponse> {
        throw new Error('Method not implemented.');
    }
}
