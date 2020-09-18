import { Injectable } from '@angular/core';

import { DataGridConfig } from '../core/widgets/data-grid-config';
import { ColumnsSymbol } from '../decorators/columns/column';
import { getFields } from '../decorators/fields/field';
import { DataGridSymbol } from '../decorators/widgets/data-grid';
import { getDataManager } from '../decorators/widgets/data-manager';
import { getEditor } from '../decorators/widgets/editor';
import { getToolbar } from '../decorators/widgets/query-toolbar';

/**
 * 将实体解析成对应元数据
 */
@Injectable()
export class EntityResolveMetaConfigService {
  resolvelEntity(entity: new () => any) {
    const columns = Reflect.getMetadata(ColumnsSymbol, entity.prototype);
    const config = Reflect.getMetadata(DataGridSymbol, entity) as DataGridConfig;
    config.columns = columns;
    if (config.queryEntity) {
      const queryToolbar = getToolbar(config.queryEntity);
      queryToolbar.queryFields = getFields(config.queryEntity);

      config.queryToolbar = queryToolbar;
    }
    if (config.editorEntity) {
      config.editor = getEditor(config.editorEntity);
      config.editor.fields = getFields(config.editorEntity);
    }
    config.dataManager = getDataManager(entity);
    if(config.dataManager){
      config.dataManager.columns = columns;
      config.dataManager.fields = config.editor ? config.editor.fields : [];
    }
 
    debugger;
    return config;
  }

  resolveToolbar(entity) {}
}
