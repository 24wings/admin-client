import { DataManagerConfig } from '../../core/data/data-manager-config';

export const DataManagerSymbol = Symbol('data-manager');
export function DataManager(config: DataManagerConfig){
    
    return (target) => {
        Reflect.defineMetadata(DataManagerSymbol, config, target);
      };
    }
    
export function getDataManager(target) {
      return Reflect.getMetadata(DataManagerSymbol, target);
    }
    
