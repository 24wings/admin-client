import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
 serverIp='http://localhost:8080';

    constructor(private httpClient: HttpClient){}
    get dbVersion(): number{
        return localStorage.getItem('dbVersion') ? parseInt(localStorage.getItem('dbVersion')) : 0       ;
    }
    set dbVersion(value: number){
        localStorage.setItem('dbVersion', value + '');
    }
   async  initDatabase(){
     const database =   await this.httpClient.get<IDatabase>('assets/data/database.json').toPromise();
     this.dbVersion=database.version;
     this.createOrOpenDatabase(database);
    }

    async createOrOpenDatabase(database: IDatabase): Promise<IDBDatabase>{
        let db;
        const request =  indexedDB.open(database.databaseName, database.version);
        return new Promise(resolve => {

        request.onupgradeneeded =  (event) => {
            db = (event.target as any).result;
            database.tables.forEach(table => {
                if (!db.objectStoreNames.contains(table.name)) {
                    let objectStore;

                    objectStore = db.createObjectStore(table.name, { keyPath: table.keyPath,autoIncrement:table.autoIncrement });
                    table.columns.forEach(col => objectStore.createIndex(col.key, col.key, {unique: col.unique}));

                  }
            });
         
          };

        });

    }
}
