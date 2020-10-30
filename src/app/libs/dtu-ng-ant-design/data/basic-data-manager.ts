import { DataManagerConfig } from '../core/data/data-manager-config';
import { CommonPagedResponse } from './http/common-paged-response';
import { CommonResponse } from './http/common-response';
import { QueryObject } from './query/query-object';

export abstract class BasicDataManager extends DataManagerConfig {
  
  abstract load(queryObject: QueryObject): Promise<CommonPagedResponse>;
  abstract loadDetail(queryObject: QueryObject): Promise<CommonResponse>;
  abstract insert(data: any): Promise<CommonResponse>;
  abstract update(data: any): Promise<CommonResponse>;
  abstract remove(data: any): Promise<CommonResponse>;
  // abstract createTable();
  
}
