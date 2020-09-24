import { BasicColumn } from '../basic-column';
import { BasicField } from '../basic-field';

export class DataManagerConfig{
    loadUrl?: string;
    insertUrl?: string;
    updateUrl?: string;
    removeUrl?: string;
    table?: string;
    adapter?: 'local'|'url'|'odata';
    adapterInstance?: any;
    autoLoad?: boolean;
    autoInsert?: boolean;
    autoUpdate?: boolean;
    autoRemove?: boolean;
    /** 主键 */
    key?: string;
    fields?: BasicField[];
    columns?: BasicColumn[];
    dvoName?: string;
    
}
