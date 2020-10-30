import { Injectable } from '@angular/core';
import { AppSettingsService } from '../app-settings.service';
import { DataManagerConfig } from '../core/data/data-manager-config';
import { BasicDataManager } from '../data/basic-data-manager';
import { CommonPagedResponse } from '../data/http/common-paged-response';
import { CommonResponse } from '../data/http/common-response';
import { QueryObject } from '../data/query/query-object';
import {  IndexdbService } from './indexdb.service';
declare interface Window{
  db:any;
}
@Injectable()
export class LocalDbService{
    db: IDBDatabase;
    private databaseName = 'local';
    constructor(
      private indexDbService: IndexdbService,
      private appSettingService: AppSettingsService){
    }
    
  

  async  load(table, queryObject: QueryObject): Promise<CommonPagedResponse>{
        this.db =  (window as any).db;
        return new Promise(resolve => {
          
        const transaction = this.db.transaction([table]);
        const objectStore = transaction.objectStore(table);
        const request = objectStore.getAll();
     
        request.onerror = (event) => {
          console.log('事务失败');
        };
     
        request.onsuccess = ( event) => {
           if (request.result) {
            resolve({ok: true, msg: '', 
            data: {items: request.result, total: request.result.length},
             
        });
           } else {
           resolve({ok: true, msg: '', data: {items: [], total: 0}});
             
           }
        };
       });
       
      
    }
  async  insert(table, data: any|any[]): Promise<CommonResponse>{
        this.db = await this.indexDbService.createDatabase(this.databaseName, this.appSettingService.dbVersion);
        return new Promise(resolve => {

        const request = this.db.transaction([table], 'readwrite')
        .objectStore(table)
        .add(data);
    
        request.onsuccess = (event) => {
        console.log('数据写入成功');
        resolve({ok: true, data});
      };
    
        request.onerror = (event) => {
        console.log('数据写入失败');
      };

        
   
        request.onerror = (event) => {
        console.log('事务失败');
      };
    });

    }
    async update(table, data: any): Promise<CommonResponse>{
        const db = await this.indexDbService.createDatabase(this.databaseName, this.appSettingService.dbVersion);
        return new Promise(resolve => {
            const request =  db.transaction([table], 'readwrite')
            .objectStore(table)
            .put(data);
        
            request.onsuccess =  (event) => {
            console.log('数据更新成功');
            resolve({ok: true, data, msg: '数据更新成功'});
          };
        
            request.onerror =  (event) => {
            console.log('数据更新失败');
            resolve({ok: false, data, msg: '数据更新失败'});
          };
        });
       
    }
   async remove(table, data: any): Promise<CommonResponse>{
        const db = await this.indexDbService.createDatabase(this.databaseName, this.appSettingService.dbVersion);
        return new Promise(resolve => {
            const request = db.transaction([table], 'readwrite')
            .objectStore(table)
            .delete(data);
        
            request.onsuccess = (event) => {
            console.log('数据删除成功');
            resolve({ok: true, data});
          };
        });
        
          
    }
}
