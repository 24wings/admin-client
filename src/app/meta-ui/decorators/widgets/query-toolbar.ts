import { QueryToolbarConfig } from '../../core/widgets/query-toolbar-config';

export const QueryToolbarSymbol = Symbol('query-toolbar');
export function QueryToolbar(config: QueryToolbarConfig) {
  return (target) => {
    Reflect.defineMetadata(QueryToolbarSymbol, config, target);
  };
}
export function getToolbar(target) {
  return Reflect.getMetadata(QueryToolbarSymbol, target.proptotype || target);
}
