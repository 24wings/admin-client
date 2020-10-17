import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IndexdbService } from 'projects/dtu-ng-ant-design/src/lib/services/indexdb.service';

interface IDatabase{
    databaseName: string;
    version: number;
    tables: {
        name: string, 
        keyPath: string, 
        autoIncrement: boolean,
        columns: {key: string, unique: boolean}[]
        }[];


}

@Injectable()
export class AppSettingsService{
 serverIp = 'http://localhost:8080';

    constructor(private httpClient: HttpClient){}
    get dbVersion(): number{
        return localStorage.getItem('dbVersion') ? parseInt(localStorage.getItem('dbVersion')) : 0       ;
    }
    set dbVersion(value: number){
        localStorage.setItem('dbVersion', value + '');
    }
   async  initDatabase(){
     const database =   await this.httpClient.get<IDatabase>('assets/data/database.json').toPromise();
     this.dbVersion = database.version;
    //  this.createOrOpenDatabase(database);
    //  const db = await this.indexDbServoce.createDatabase('local', this.dbVersion);
     await this.createOrOpenDatabase(database);
    }

    async createOrOpenDatabase( database: IDatabase): Promise<IDBDatabase>{
        
        const request =  indexedDB.open(database.databaseName, database.version);
        return new Promise(resolve => {
        request.onupgradeneeded =  (event) => {
            window.db = (event.target as any).result;
            database.tables.forEach(table => {
                if (!db.objectStoreNames.contains(table.name)) {
                    let objectStore;

                    objectStore = window.db.createObjectStore(table.name, { keyPath: table.keyPath, autoIncrement: table.autoIncrement });
                    table.columns.forEach(col => objectStore.createIndex(col.key, col.key, {unique: col.unique}));

                  }
            });
         
          };
        request.onsuccess = (event) => {
            window.db = (event.target as any).result;
            database.tables.forEach(table => {
                if (!db.objectStoreNames.contains(table.name)) {
                    let objectStore;
                    objectStore = window.db.createObjectStore(table.name, { keyPath: table.keyPath, autoIncrement: table.autoIncrement });
                    table.columns.forEach(col => objectStore.createIndex(col.key, col.key, {unique: col.unique}));
                  }
            });
          };

        });


    }
}
