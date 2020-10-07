import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { BasicDataManager } from '../../data/basic-data-manager';
import { CommonResponse } from '../../data/http/common-response';
import { QueryObject } from '../../data/query/query-object';
import { BasicAdapter } from './basic-adapter';

export class UrlAdapter extends BasicAdapter{
    private httpClient: HttpClient;
    load(queryObject: QueryObject, dataManager?: BasicDataManager): Promise<CommonResponse> {
     return   this.httpClient.post('http://localhost:8080/api/url-adapter/query', queryObject, {params: {dvoName: dataManager.dvoName}}).toPromise() as any;
    }
    loadDetail(queryObject: QueryObject, dataManager?: BasicDataManager): Promise<CommonResponse> {
        throw new Error('Method not implemented.');
    }
    insert(data: any, dataManager?: BasicDataManager): Promise<CommonResponse> {
        // throw new Error('Method not implemented.');
        return this.httpClient.post(`http://localhost:8080/api/url-adapter/insert`, data, {params: {dvoName: dataManager.dvoName}}).toPromise() as any;
    }
    update(data: any, dataManager?: BasicDataManager): Promise<CommonResponse> {
        return this.httpClient.post(`http://localhost:8080/api/url-adapter/update`, data, {params: {dvoName: dataManager.dvoName}}).toPromise() as any;
   
    }
    remove(id: any, dataManager?: BasicDataManager): Promise<CommonResponse> {
        return this.httpClient.get(`http://localhost:8080/api/url-adapter/delete`, {params: {dvoName: dataManager.dvoName, id}}).toPromise() as any;
   
    }

    constructor(private injector: Injector){
        super(injector);
        this.httpClient =   injector.get(HttpClient);
    }

}
