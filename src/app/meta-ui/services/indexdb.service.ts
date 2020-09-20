import { Injectable } from '@angular/core';
import * as _ from 'loadsh';
import { AppSettingsService } from 'src/app/app-settings.service';
import { DataManagerConfig } from '../core/data/data-manager-config';
import { BasicDataManager } from '../data/basic-data-manager';
@Injectable()
export class IndexdbService{
  constructor(private appSettingsService: AppSettingsService){}
    createDatabase(databaseName: string, version): Promise<IDBDatabase>{
      return new Promise(resolve => {
        let db;
        const request =  indexedDB.open(databaseName, version);
        request.onerror = (event) => {
          console.error('数据库打开错误');
          resolve(null);
      };
        request.onsuccess = (event) => {
        db = request.result;
        console.log('数据库打开成功');
        resolve(db);
      };
        request.onupgradeneeded = (event) => {
        db = (event.target as any).result;
        resolve(db);
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
