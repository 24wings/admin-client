import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({selector: 'sql-generate-page', templateUrl: './sql-generate-page.component.html'})
export class SqlGeneratePageComponent implements OnInit{

    data: any[] = [];
    total;
    editorMode:string;
    constructor(private httpClient: HttpClient){}


    ngOnInit(){
        this.refresh();
 
    }

   async refresh(){
      const result =   await  this.httpClient.post(`http://localhost:8080/api/sql/load`, {conditions: [], take: 10, skip: 0, orderBy: {sort: 'desc', fieldName: 'name'}}).toPromise() as any;
      this.data = result.data;
      this.total = result.total;
    }




}
