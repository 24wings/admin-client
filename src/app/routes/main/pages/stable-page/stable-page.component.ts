import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CodeManageService } from 'src/app/code-manage.service';

@Component({ selector: 'stable-page', templateUrl: './stable-page.component.html' })
export class StablePageComponent {
    module: string;
    page: string;
    pageMeta;
    constructor(private route: ActivatedRoute, private codeManage: CodeManageService) {
        const { module, page } = route.snapshot.params;
        this.module = module;
        this.page = page;

        
    }
    ngOnInit(){
      
    }
    log(){
        const module = this.codeManage.modules.find(m => m.module === this.module);
        debugger;
        if (module){
            this.pageMeta = module.pages.find(page => page.name === this.page);
            console.log(this.pageMeta)
        }
    }

}
