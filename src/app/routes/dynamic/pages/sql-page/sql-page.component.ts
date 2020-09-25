import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '@env/environment';

@Component({selector: 'sql-page', templateUrl: './sql-page.component.html'})
export class SqlPageComponent implements OnInit{
    objectCode;
    metaObject;

    constructor(private route: ActivatedRoute, private httpClient: HttpClient){
     this.objectCode =   this.route.snapshot.params.objectCode;

    }
    ngOnInit(){
        if (this.objectCode){
            this.httpClient.get<any>(environment.ip + '/api/sql/get-object',
            {params: {objectCode: this.objectCode}})
            .toPromise().then(rtn => this.metaObject = 
                JSON.parse(rtn.config)
                );
            

        }

    }
}
