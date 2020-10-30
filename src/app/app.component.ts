import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuService, TitleService, VERSION as VERSION_ALAIN } from '@delon/theme';
import { NzModalService } from 'ng-zorro-antd/modal';
import { VERSION as VERSION_ZORRO } from 'ng-zorro-antd/version';
import { filter } from 'rxjs/operators';
import { AppSettingsService } from './app-settings.service';
import { CodeManageService } from './code-manage.service';

@Component({
  selector: 'app-root',
  template: ` <router-outlet></router-outlet> `,
  styles: [
    `
      .close-btn,
      .open-btn {
        height: 100vh;
        display: flex;
        align-items: center;
        border: 1px solid #e2e2e2;
        color: #e2e2e2;
        cursor: pointer;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  constructor(
    el: ElementRef,
    renderer: Renderer2,
    private router: Router,
    private titleSrv: TitleService,
    private modalSrv: NzModalService,
    private httpClient: HttpClient,
    private codeManager: CodeManageService,
    private appSettingsService: AppSettingsService,
    private menuService: MenuService,
  ) {
    renderer.setAttribute(
      el.nativeElement,
      'ng-alain-version',
      VERSION_ALAIN.full
    );
    renderer.setAttribute(
      el.nativeElement,
      'ng-zorro-version',
      VERSION_ZORRO.full
    );
  }

  async ngOnInit() {
    this.reloadSystem();
    this.reloadDatabase();
    const systemJson = (await this.httpClient
      .get('/assets/config/system.json')
      .toPromise()) as any;
    for (const module of systemJson.modules) {
      const moduleJson = (await this.httpClient
        .get(module, { responseType: 'text' })
        .toPromise()) as any;
      this.codeManager.addModule(jsyaml.load(moduleJson));
    }
    this.router.events
      .pipe(filter((evt) => evt instanceof NavigationEnd))
      .subscribe(() => {
        this.titleSrv.setTitle();
        this.modalSrv.closeAll();
      });
  }

  async reloadDatabase() {
    const data2 = await this.httpClient
      .get('assets/docs/templates/database.yml', { responseType: 'text' })
      .toPromise();

    const databaseModule = jsyaml.load(data2);
    this.appSettingsService.initDatabase(databaseModule);
  }
  async reloadSystem() {

    const data = await this.httpClient
      .get('assets/docs/templates/system.yml', { responseType: 'text' })
      .toPromise();
    const moduleJson=jsyaml.load(data);
    this.menuService.clear();
    this.menuService.add(moduleJson.menus);
    this.codeManager.setSystemCode(moduleJson);
  }
}
