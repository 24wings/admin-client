import { FormGroup } from '@angular/forms';
import { ComponentAlias } from '../component-alais';
import { BasicDynamicComponentConfig } from './basic-dynamic-component.config';

export abstract class BasicDynamicComponent {
  config: BasicDynamicComponentConfig;
  data?: any;
  form?: FormGroup;
}
