import { QueryCondition } from '../../core/utils/stq/query-condition';
import { QueryOrderBy } from './query-order-by';

export class QueryObject{
    conditions?: QueryCondition[];
    take?: number;
    skip?: number;
    orderBy?: QueryOrderBy;
}
