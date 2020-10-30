import { ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core';
import { AlainConfigService, InputBoolean } from '@delon/util';

@Component({
  selector: 'ng-page-header-wrapper',
  templateUrl: './ng-page-header.component.html',
  host: {
    '[class.alain-pro__page-header-wrapper]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgPageHeaderWrapperComponent {
  // #region page-header fields

  @Input() title: string | TemplateRef<void>;
  @Input() @InputBoolean() loading = false;
  @Input() home: string;
  @Input() homeLink: string;
  @Input() homeI18n: string;
  /**
   * 自动生成导航，以当前路由从主菜单中定位
   */
  @Input() @InputBoolean() autoBreadcrumb = false;
  /**
   * 自动生成标题，以当前路由从主菜单中定位
   */
  @Input() @InputBoolean() autoTitle = true;
  /**
   * 是否自动将标题同步至 `TitleService`、`ReuseService` 下，仅 `title` 为 `string` 类型时有效
   */
  @Input() @InputBoolean() syncTitle = true;
  @Input() breadcrumb: TemplateRef<void>;
  @Input() logo: TemplateRef<void>;
  @Input() action: TemplateRef<void>;
  @Input() content: TemplateRef<void>;
  @Input() extra: TemplateRef<void>;
  @Input() tab: TemplateRef<void>;
  @Input() phContent: TemplateRef<void>;
  // #endregion

  // #region fields

  @Input() top: TemplateRef<void>;
  @Input() @InputBoolean() noSpacing = false;
  @Input() style: {};

  // #endregion

  constructor( cog: AlainConfigService) {
    cog.attach(this, 'pageHeader', { syncTitle: true });
  }
}
