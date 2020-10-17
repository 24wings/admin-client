import { Injectable } from '@angular/core';

@Injectable()
export class CodeManageService{
    modules=[];
    
    getModuleCodes(){
        return sessionStorage.getItem('module-codes') || [];
    }
    getSystemCode(){
        return sessionStorage.getItem('system-code');
    }
    setSystemCode(code){
        sessionStorage.setItem('system-code', code);
    }
    setModuleCodes(codes:any[]){
        sessionStorage.setItem('module-codes',JSON.stringify(codes));
    }
    addModule(module){
            this.modules.push(module);
    }
}
