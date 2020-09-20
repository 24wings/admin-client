import { Injectable } from '@angular/core';
import { ComponentAlias } from '../component-alais';

import { DataGridConfig } from '../core/widgets/data-grid-config';
import { ColumnsSymbol } from '../decorators/columns/column';
import { getFields } from '../decorators/fields/field';
import { DataGridSymbol } from '../decorators/widgets/data-grid';
import { getDataManager } from '../decorators/widgets/data-manager';
import { EditorSymbol, getEditor } from '../decorators/widgets/editor';
import { getToolbar } from '../decorators/widgets/query-toolbar';

/**
 * 将实体解析成对应元数据
 */
@Injectable()
export class EntityResolveMetaConfigService {
  resolvelEntity(entity: new () => any) {
    const columns = Reflect.getMetadata(ColumnsSymbol, entity.prototype || entity);
    const config = Reflect.getMetadata(DataGridSymbol, entity) as DataGridConfig || Reflect.getMetadata(EditorSymbol, entity);
    config.dataManager = getDataManager(entity);

    config.columns = columns;
    // if (config.queryEntity) {
    const queryToolbar = getToolbar(config.queryEntity  || entity);
    if (queryToolbar){
      queryToolbar.queryFields = getFields(config.queryEntity || entity);
      queryToolbar.dataManager = config.dataManager;
  
    }
    
    config.queryToolbar = queryToolbar;
    // }
    if (config.componentAlias !== ComponentAlias.Editor){
      config.editor = this.resolveEditor(config.editorEntity || entity);

    }else{
      config.fields = getFields(config.queryEntity || entity);
    }


    if (config.dataManager){
      config.dataManager.columns = columns;
      config.dataManager.fields = config.editor ? config.editor.fields : getFields(config.queryEntity || entity);
    }
 
    return config;
  }

  resolveToolbar(entity) {}

  resolveEditor(entity){
    const editor = getEditor(entity);
    if (editor){
        editor.fields = getFields(entity);
        editor.dataManager = getDataManager(entity);
    }
    return editor;
  }
  
}
