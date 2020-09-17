import { EditorConfig } from '../../core/widgets/editor-config';

export const EditorSymbol = Symbol('editor');

export function Editor(config: EditorConfig) {
  return (target) => {
    Reflect.defineMetadata(EditorSymbol, config, target);
  };
}

export function getEditor(target) {
  return Reflect.getMetadata(EditorSymbol, target);
}
