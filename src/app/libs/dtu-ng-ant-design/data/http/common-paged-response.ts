import { CommonResponse } from './common-response';

export class CommonPagedResponse extends CommonResponse{
data: {total: number, items: any[]};
}
