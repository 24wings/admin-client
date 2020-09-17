import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Menu, MenuService } from '@delon/theme';
import { InputBoolean } from '@delon/util';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { BrandService } from '../../pro.service';

@Component({
  selector: '[layout-pro-menu]',
  templateUrl: './menu.component.html',
  host: {
    '[class.alain-pro__menu]': 'true',
    '[class.alain-pro__menu-only-icon]': 'pro.onlyIcon',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutProMenuComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  menus: Menu[];

  @Input() @InputBoolean() disabledAcl = false;
  @Input() mode = 'inline';

  constructor(private menuSrv: MenuService, private router: Router, public pro: BrandService, private cdr: ChangeDetectorRef) {}

  private cd() {
    this.cdr.markForCheck();
  }

  private genMenus(data: Menu[]) {
    const res: Menu[] = [];
    // ingores category menus
    const ingoreCategores = data.reduce((prev, cur) => prev.concat(cur.children), []);
    this.menuSrv.visit(ingoreCategores, (item, parent) => {
      if (!item._aclResult) {
        if (this.disabledAcl) {
          item.disabled = true;
        } else {
          item._hidden = true;
        }
      }
      if (item._hidden === true) {
        return;
      }
      if (parent === null) {
        res.push(item);
      }
    });
    this.menus = res;

    this.openStatus();
  }

  private openStatus() {
    const inFn = (list: Menu[]) => {
      for (const i of list) {
        i._open = false;
        i._selected = false;
        if (i.children.length > 0) {
          inFn(i.children);
        }
      }
    };
    inFn(this.menus);

    let item = this.menuSrv.getHit(this.menus, this.router.url, true);
    if (!item) {
      this.cd();
      return;
    }
    do {
      item._selected = true;
      if (!this.pro.isTopMenu && !this.pro.collapsed) {
        item._open = true;
      }
      item = item._parent;
    } while (item);
    this.cd();
  }

  openChange(item: Menu, statue: boolean) {
    const data = item._parent ? item._parent.children : this.menus;
    if (data && data.length <= 1) {
      return;
    }
    data.forEach((i) => (i._open = false));
    item._open = statue;
  }

  closeCollapsed() {
    const { pro } = this;
    if (pro.isMobile) {
      setTimeout(() => pro.setCollapsed(true), 25);
    }
  }

  ngOnInit() {
    const { unsubscribe$, router, pro } = this;
    this.menuSrv.change.pipe(takeUntil(unsubscribe$)).subscribe((res) => this.genMenus(res));

    router.events
      .pipe(
        takeUntil(unsubscribe$),
        filter((e) => e instanceof NavigationEnd),
      )
      .subscribe(() => this.openStatus());

    pro.notify
      .pipe(
        takeUntil(unsubscribe$),
        filter(() => !!this.menus),
      )
      .subscribe(() => this.cd());
  }

  ngOnDestroy() {
    const { unsubscribe$ } = this;
    unsubscribe$.next();
    unsubscribe$.complete();
  }
}
