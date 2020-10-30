import { ComponentAlias } from '../component-alais';
import { BasicDynamicComponentConfig } from './basic-dynamic-component.config';
import { Valid } from './fields/Valid';

export abstract class BasicField extends BasicDynamicComponentConfig {
  key?: string;
  label?: string;
  index?: number;
  valid?: Valid;
  readonly?: boolean;
  condition?: '=' | 'like' | '>' | '<';
  required?: boolean;
  value?: any;
  isPrimaryKey?: boolean;
  span?:number;
}
