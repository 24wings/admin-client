import { Injectable } from '@angular/core';
import * as _ from 'loadsh';
import { AppSettingsService } from '../app-settings.service';
import { DataManagerConfig } from '../core/data/data-manager-config';
import { BasicDataManager } from '../data/basic-data-manager';
declare interface Window{
  db:any;
}
@Injectable()
export class IndexdbService{
  constructor(private appSettingsService: AppSettingsService){}
    createDatabase(databaseName: string, version): Promise<IDBDatabase>{
      return new Promise(resolve => {
        const request =  indexedDB.open(databaseName, version);
        request.onerror = (event) => {
          console.error('数据库打开错误');
          resolve(null);
      };
        request.onsuccess = (event) => {
          debugger;
          (window as any).db = request.result;
          console.log('数据库打开成功');
          resolve((window as any).db);
      };
        request.onupgradeneeded = (event) => {
          debugger;
          (window as any).db = (event.target as any).result;
          resolve((window as any).db);
      };    
        
      });
        
    }
  

      createTable(db: IDBDatabase, dataManager: DataManagerConfig){

      const keyPath =  dataManager.fields.find(f => f.isPrimaryKey)?.key || dataManager.columns.find(c => c.isPrimaryKey)?.key;
      const objectStore =   db.createObjectStore(dataManager.table, {keyPath});
      const keys = (dataManager.fields || []).map(field => field.key).concat(...((dataManager.columns || []).map(c => c.key)));
      _.uniq(keys).forEach(key => objectStore.createIndex(key, key, { unique: false }));

    }
    

   

}
