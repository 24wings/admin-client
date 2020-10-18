import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TitleService, VERSION as VERSION_ALAIN } from '@delon/theme';
import { NzModalService } from 'ng-zorro-antd/modal';
import { VERSION as VERSION_ZORRO } from 'ng-zorro-antd/version';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
  <div style="display:flex; ">
    <div style="flex:1" *ngIf="showEditor">
      <system-editor (onChange)="reload()"></system-editor>
     
    </div>
    <div style="height:100vh">
    
    <div class="close-btn" *ngIf="showEditor" (click)="showEditor=false"><i nz-icon nzType="left"></i> </div>
    <div class="open-btn"  *ngIf="!showEditor"  (click)="showEditor=true"><i nz-icon nzType="right"></i> </div>
  
</div>
    <div style="flex:1" >
   <router-outlet *ngIf="!refreshing"></router-outlet> 
    </div>
</div>
   `,
   styles: [
     `.close-btn,.open-btn{
      height: 100vh;
      display: flex;
      align-items: center;
      border: 1px solid #e2e2e2;
      color: #e2e2e2;
      cursor: pointer;
  
     }
     
     `
   ]
})
export class AppComponent implements OnInit {
  showEditor = true;
  refreshing = true;
  constructor(
    el: ElementRef,
    renderer: Renderer2,
    private router: Router,
    private titleSrv: TitleService,
    private modalSrv: NzModalService,
  ) {
    renderer.setAttribute(el.nativeElement, 'ng-alain-version', VERSION_ALAIN.full);
    renderer.setAttribute(el.nativeElement, 'ng-zorro-version', VERSION_ZORRO.full);
  }

  ngOnInit() {
    this.router.events.pipe(filter((evt) => evt instanceof NavigationEnd)).subscribe(() => {
      this.titleSrv.setTitle();
      this.modalSrv.closeAll();
    });
    this.reload()
  }
  reload(){
    this.refreshing = true;
    setTimeout(() => {
      this.refreshing = false;
    }, 200);
  }
}
