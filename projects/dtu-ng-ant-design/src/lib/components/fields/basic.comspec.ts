import { EventEmitter } from '@angular/core';
import { BasicDynamicComponentConfig } from '../../core/basic-dynamic-component.config';
import { BasicField } from '../../core/basic-field';
import { IFieldIO } from '../../core/fields/ifield.io';
import { QueryCondition } from '../../core/utils/stq/query-condition';
import { ValidService } from '../../services/valid.service';
import { ValidStatusEnum } from './valid-status.enum';

export abstract class BasicComspce<T> {
  config: BasicField;
  __value__;
  __field__;
  valueChange = new EventEmitter();
  untouch = true;
  errMsg = '';
  validStatus: ValidStatusEnum = ValidStatusEnum.warning;
  get value() {
    return this.__value__;
  }
  set value(val: any) {
    this.__value__ = val;
    this.valueChange.emit(val);
    if (this.untouch) {
      this.untouch = false;
    } else {
      this.validAfterValueChange();
    }
  }

  validAfterValueChange() {
    const result = this.validService.valid(this.__value__, this.config.valid);
    if (result.ok) {
      this.validStatus = ValidStatusEnum.success;
      this.errMsg = '';
    } else {
      this.validStatus = ValidStatusEnum.error;
      this.errMsg = result.msg;
    }
  }
  formatter = (val) => {
    if (val != null || val !== undefined) {
      if (this.config) {
      }
      return val;
    }
  };
  parser = (val) => {
    if (val != null || val !== undefined) {
      if (this.config) {
        // if (this.config.transform) {
        //   if (this.field.transform.parser) {
        //     return this.field.transform.parser(val);
        //   }
        // }
        return val;
      }
    }
  };
  read(val: any, field?: BasicField) {
    if (!field) {
      //   if (this.field.transform) {
      //     if (this.field.transform.read) {
      //       return this.field.transform.read(val);
      //     }
      //   }
    } else {
      //   if (field.transform) {
      //     if (field.transform.read) {
      //       console.log(field, val);
      //       if (field.type == Date) {
      //         val = new Date(val);
      //       }
      //       return field.transform.read(val);
      //     }
      //   }
    }
    return val;
  }
  constructor(public validService: ValidService) {}

  getPresetCondition(): QueryCondition[] {
    if (this.config) {
      //   if (this.metaCom.data) {
      // if (this.metaCom.data.presetConditions) {
      //   debugger;
      //   if (typeof this.metaCom.data.presetConditions == 'function') {
      //     return (this.metaCom.data.presetConditions as QueryConditionExpress)();
      //   } else {
      //     return this.metaCom.data.presetConditions;
      //   }
      // }
      // return [];
      //   }
      return [];
    }
    return [];
  }
}
