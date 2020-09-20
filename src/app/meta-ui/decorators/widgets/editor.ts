import { ComponentAlias } from '../../component-alais';
import { EditorConfig } from '../../core/widgets/editor-config';

export const EditorSymbol = Symbol('editor');

export function Editor(config: EditorConfig) {
  config.componentAlias=ComponentAlias.Editor;
  return (target) => {
    Reflect.defineMetadata(EditorSymbol, config, target);
  };
}

export function getEditor(target) {
  return Reflect.getMetadata(EditorSymbol, target);
}
