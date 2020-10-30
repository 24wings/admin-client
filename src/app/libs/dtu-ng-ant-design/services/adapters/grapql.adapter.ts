import { Injectable } from '@angular/core';
import { BasicDataManager } from '../../data/basic-data-manager';
import { CommonResponse } from '../../data/http/common-response';
import { QueryObject } from '../../data/query/query-object';
import { BasicAdapter } from './basic-adapter';

export class GrapqlAdapter extends BasicAdapter{
    load(queryObject: QueryObject, dataManager?: BasicDataManager): Promise<CommonResponse> {
        throw new Error('Method not implemented.');
    }
    loadDetail(queryObject: QueryObject, dataManager?: BasicDataManager): Promise<CommonResponse> {
        throw new Error('Method not implemented.');
    }
    insert(data: any, dataManager?: BasicDataManager): Promise<CommonResponse> {
        throw new Error('Method not implemented.');
    }
    update(data: any, dataManager?: BasicDataManager): Promise<CommonResponse> {
        throw new Error('Method not implemented.');
    }
    remove(data: any, dataManager?: BasicDataManager): Promise<CommonResponse> {
        throw new Error('Method not implemented.');
    }

}