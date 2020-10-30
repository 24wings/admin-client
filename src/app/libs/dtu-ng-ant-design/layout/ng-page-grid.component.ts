import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Inject, Input, Optional, Renderer2 } from '@angular/core';
import { ReuseTabService } from '@delon/abc/reuse-tab';
import { TitleService } from '@delon/theme';
import { InputBoolean } from '@delon/util';


@Component({
  selector: 'ng-page-grid',
  templateUrl: './ng-page-grid.component.html',
  host: {
    '[class.alain-pro__page-grid]': 'true',
    '[class.alain-pro__page-grid-no-spacing]': 'noSpacing',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgPageGridComponent implements AfterViewInit {
  @Input() @InputBoolean() loading = false;

  @Input() @InputBoolean() noSpacing = false;

  @Input() style: any;

  @Input()
  set title(value: string) {
    if (value) {
      if (this.titleSrv) {
        this.titleSrv.setTitle(value);
      }
      if (this.reuseSrv) {
        this.reuseSrv.title = value;
      }
    }
  }

  constructor(
    private el: ElementRef,
    private rend: Renderer2,

    @Optional() @Inject(TitleService) private titleSrv: TitleService,
    @Optional() @Inject(ReuseTabService) private reuseSrv: ReuseTabService,
  ) {}

  ngAfterViewInit() {
    if (this.style) {
      Object.keys(this.style).forEach((key: string) => {
        this.rend.setStyle(this.el.nativeElement, key, this.style[key]);
      });
    }
  }
}
