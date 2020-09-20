import { Injectable } from '@angular/core';
import * as _ from 'loadsh';
import { QueryCondition } from '../core/utils/stq/query-condition';
import { QueryToolbarConfig } from '../core/widgets/query-toolbar-config';
import { QueryObject } from '../data/query/query-object';
/**
 * 数据查询服务
 * 支持 集成查询对象来查询对应的数据
 */
@Injectable()
export class DataQueryService{

    query<T>(data: T[], queryObject: QueryObject){
       if (queryObject.conditions){
           queryObject.conditions.filter(condition => condition.value !== null).forEach(condition => {
            data = this.filterByCondition(data, condition);
           });
           
       }
       if (queryObject.orderBy){
           if (queryObject.orderBy.sort){
               data = _.sortBy(data, (item) => {
               return   queryObject.orderBy.sort === 'ascend' ? item[queryObject.orderBy.key] : -item[queryObject.orderBy.key];
               });
           }
       }
       if (queryObject.skip){
           data = data.filter((item, i) => i >= queryObject.skip);
       }
       if (queryObject.take){
        data=   data.slice(0,queryObject.take);
       }
       return data;

    }

    queryToolbarValueToQueryObject<T>(queryData: any, queryToolbarConfig: QueryToolbarConfig): QueryObject{

          const queryFields = queryToolbarConfig.queryFields.filter(f => queryData[f.key]);
          const conditions = queryFields.map(f => ({field: f.key, compare: f.condition, value: queryData[f.key], andOr: 'and'})) as QueryCondition[];
            
          return {conditions};
    }

    filterByCondition<T>(data: T[], condition: QueryCondition){
        switch (condition.compare){
            case 'like':
                return data.filter(item => item[condition.field].indexOf(condition.value) !== -1);
            case '>':
            return data.filter(item => item[condition.field] > condition.value);
            case '=':
                return data.filter(item => item[condition.field] === condition.value);
            case '<':
                    return data.filter(item => item[condition.field] < condition.value);
                    
        }
    }

}
