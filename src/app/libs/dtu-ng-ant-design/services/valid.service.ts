import { Injectable } from '@angular/core';
import { Valid } from '../core/fields/Valid';

@Injectable()
export class ValidService {
  phone = /1[3-9]\d{9}/g;
  constructor() {}

  required(val: any) {
    return !(val == null || val === undefined || val === '');
  }

  minLength(val: any, min: number) {
    return (val as string).length >= min;
  }
  maxLength(val: any, max: number) {
    return (val as string).length <= max;
  }
  /** 可以比较日期和数字 */
  $lt(val: number | Date, $lt: number | Date) {
    return val < $lt;
  }
  $gt(val: number, $gt: number | Date) {
    return val > $gt;
  }
  $ngt(val: number, $ngt: number | Date) {
    return val <= $ngt;
  }
  $nlt(val: number, $nlt: number | Date) {
    return val >= $nlt;
  }

  valid(val: any, valid: Valid): { ok: boolean; msg?: string } {
    if (valid.required) {
      if (!this.required(val)) {
        console.warn(val, valid, '必填');

        return { ok: false, msg: valid.key + '必填' };
      }
    }
    if (valid.regexp) {
      console.log(valid, valid.regexp, val, valid.regexp.test(val));
      if (!valid.regexp.test(val)) {
        return { ok: false, msg: valid.key + '格式错误' };
      }
    }
    if (valid.minLength) {
      if (!this.minLength(val, valid.minLength)) {
        return { ok: false, msg: valid.key + '最少' + valid.minLength + '个字符' };
      }
    }
    if (valid.maxLength) {
      if (!this.maxLength(val, valid.maxLength)) {
        return { ok: false, msg: valid.key + '最多' + valid.maxLength + '个字符' };
      }
    }
    if (valid.$gt) {
      if (!this.$gt(val, valid.$gt)) {
        return { ok: false, msg: valid.key + '必须大于' + valid.$gt };
      }
    }
    if (valid.$lt) {
      if (!this.$lt(val, valid.$gt)) {
        return { ok: false, msg: valid.key + '必须小于' + valid.$lt };
      }
    }
    if (valid.$ngt) {
      if (!this.$lt(val, valid.$ngt)) {
        return { ok: false, msg: valid.key + '必须不大于' + valid.$ngt };
      }
    }
    if (valid.$nlt) {
      if (!this.$lt(val, valid.$gt)) {
        return { ok: false, msg: valid.key + '必须不小于' + valid.$nlt };
      }
    }

    return { ok: true };
  }
  customCheck(val: any, func: Function) {
    return func(val);
  }
}
