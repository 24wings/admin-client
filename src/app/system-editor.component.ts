import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { MenuService } from '@delon/theme';
import { AppSettingsService } from './app-settings.service';
import { CodeManageService } from './code-manage.service';

@Component({selector: 'system-editor', templateUrl: './system-editor.component.html', styleUrls: ['./system-editor.component.css']})
export class SystemEditorComponent{
  @Output() onChange = new EventEmitter();
    newModule = {
        name: '新模块',
        code: ''
    };
    addMoudleVisible = false;
    tabs = [
        {
          name: '系统',
          icon: 'setting',
          edit: false,
          data: ''
        },
        {
          name: '控件',
          icon: 'control',
          edit: false
        },
        {
            name: '数据库',
            icon: 'database',
            edit: false
        },
        {
            name: '角色权限',
            icon: 'team',
            edit: false
        }
      ];
      constructor(private httpClient: HttpClient, private menuService: MenuService, private codeManageService: CodeManageService, private appSettingsService: AppSettingsService){}
     async ngOnInit(){
        await this.reloadSystem();
        const data = await this.httpClient.get('assets/docs/templates/rbac.yml', {responseType: 'text'}).toPromise();
        this.codeManageService.addModule(jsyaml.load(data));
        const data2 = await this.httpClient.get('assets/docs/templates/database.yml', {responseType: 'text'}).toPromise();
        this.tabs[2].data = data2;
        this.reloadDatabase();
      }
     async reloadDatabase(){
       const databaseModule = jsyaml.load(  this.tabs[2].data);
        // this.codeManageService.addModule(jsyaml.load(data));
       this.appSettingsService.initDatabase(databaseModule);
      }
     async reloadSystem(){
        const system = this.codeManageService.getSystemCode();

        if (system){
          this.tabs[0].data = system;
          this.save(this.tabs[0]);
        }else{
           const data = await this.httpClient.get('assets/docs/templates/system.yml', {responseType: 'text'}).toPromise();
           this.tabs[0].data = data;
           console.log(jsyaml.load(data));
        }
      }
     async save(tab){
         console.log( jsyaml.load(tab.data));
         const moduleJson = jsyaml.load(tab.data);
         if (moduleJson.module === 'system'){
             console.log(moduleJson.menus);
             this.menuService.clear();
             this.menuService.add(moduleJson.menus);
             this.codeManageService.setSystemCode(tab.data);
         }else if (moduleJson.module === 'database'){
           await this.reloadDatabase();

         }
         this.onChange.emit();
      }
      addNewModule(){
          this.tabs.push({name: this.newModule.name, data: this.newModule.code, edit: false, icon: 'project'});
          this.addMoudleVisible = false;
          this.codeManageService.setModuleCodes(this.tabs.slice(1));
      }
      clearLocalDatabase(){
        indexedDB.deleteDatabase('local');
        this.reloadDatabase();
        this.onChange.emit();
      }
}
