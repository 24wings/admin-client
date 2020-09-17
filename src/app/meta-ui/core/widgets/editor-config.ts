import { BasicDynamicComponentConfig } from '../basic-dynamic-component.config';
import { BasicField } from '../basic-field';

export class EditorConfig extends BasicDynamicComponentConfig {
  fields?: BasicField[];
  submitUrl?: string;
  loadUrl?: string;
}
