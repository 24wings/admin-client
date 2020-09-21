import { Injectable } from '@angular/core';
import { ComponentAlias } from '../component-alais';

import { DataGridConfig } from '../core/widgets/data-grid-config';
import { ColumnsSymbol } from '../decorators/columns/column';
import { getFields } from '../decorators/fields/field';
import { DataGridSymbol } from '../decorators/widgets/data-grid';
import { getDataManager } from '../decorators/widgets/data-manager';
import { EditorSymbol, getEditor } from '../decorators/widgets/editor';
import { getToolbar } from '../decorators/widgets/query-toolbar';
import { getTreeView, TreeView } from '../decorators/widgets/tree-view';

/**
 * 将实体解析成对应元数据
 */
@Injectable()
export class EntityResolveMetaConfigService {
  resolvelEntity(entity: new () => any) {
    const config = Reflect.getMetadata(DataGridSymbol, entity) as DataGridConfig || getTreeView(entity) || Reflect.getMetadata(EditorSymbol, entity) ;

    switch (config.componentAlias){
      case ComponentAlias.TreeView:
       return this.resolveTreeView(entity);
       case ComponentAlias.DataGrid:
         return this.resolveDataGrid(entity);
        case ComponentAlias.Editor:
          return this.resolveEditor(entity);
        case ComponentAlias.QueryToolbar:
          return this.resolveToolbar(entity);

    }
  }
resolveDataGrid(entity){
  const columns = Reflect.getMetadata(ColumnsSymbol, entity.prototype || entity);

  const config = Reflect.getMetadata(DataGridSymbol, entity )  as DataGridConfig ;
  config.dataManager = this.resolveDataManager(entity);
  config.columns = columns;
  const queryToolbar =  this.resolveToolbar(config.queryEntity || entity);
  if (queryToolbar){
    queryToolbar.queryFields = getFields(config.queryEntity || entity);
    queryToolbar.dataManager = this.resolveDataManager(entity);
  }
  config.queryToolbar = queryToolbar;
  config.editor = this.resolveEditor(config.editorEntity || entity);
  return config;
}

  resolveToolbar(entity) {
    const toolbarConfig = getToolbar(entity);
    toolbarConfig.dataManager = this.resolveDataManager(entity);
    return toolbarConfig;
    
  }
  resolveColumns(entity){
    return Reflect.getMetadata(ColumnsSymbol, entity.prototype || entity);

  }

  resolveEditor(entity){
    const editor = getEditor(entity);
    if (editor){
        editor.fields = getFields(entity);
        editor.dataManager = this.resolveDataManager(entity);
    }
    return editor;
  }
  resolveDataManager(entity){
    const dataManager = getDataManager(entity);
    dataManager.fields = getFields(entity);
    dataManager.columns = Reflect.getMetadata(ColumnsSymbol, entity.prototype || entity);

    return dataManager;
  }
 
  resolveTreeView(entity){
    const config = getTreeView(entity);
    config.dataManager = this.resolveDataManager(entity);
    config.editor = this.resolveEditor(entity);
    config.columns = this.resolveColumns(entity);
    return config;
  }
  
}
