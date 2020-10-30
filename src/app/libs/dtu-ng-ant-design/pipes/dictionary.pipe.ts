import { Pipe ,PipeTransform} from '@angular/core';

/**
 *  
 *  TODO: 尚未实现
 */
@Pipe({name: 'dictionary'})
export class DictionaryPipe implements PipeTransform{
    transform(value: any, ...args: any[]) {
        throw new Error('Method not implemented.');
    }

}
