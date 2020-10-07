import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { EntityResolveMetaConfigService } from '../../services/entity-resovle-meta-config.service';

@Component({ selector: 'dynamic-server-dto-page', templateUrl: './dynamic-server-dto-page.component.html' })
export class DynamicServerDtoPageComponent implements OnInit {
    @Input() dvoName;
    config;
    constructor(private httpClient: HttpClient){}

  async  ngOnInit(){
    this.config =       await   this.httpClient.get('http://localhost:8080/api/dvo/loadByClassName?dvoName=' + this.dvoName).toPromise() ;

    }
}
