import { Injectable } from '@angular/core';
import { ComponentAlias } from '../component-alais';
import { ComponentRegisterProvider } from './component-register-provicer';

@Injectable()
export class ComponentRegisterFactory {
  constructor(private componentRegisterProvider: ComponentRegisterProvider) {}

  getComponentByAlias(alias: ComponentAlias): new () => any {
    const componentMapping = this.componentRegisterProvider.componentMappings.find((com) => com.alias === alias);
    if (componentMapping) {
      return componentMapping.component;
    } else {
      throw new Error('找不到该动态组件:' + alias);
    }
  }
}
