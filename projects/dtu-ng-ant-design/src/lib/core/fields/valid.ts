export class Valid {
  key?: string;
  required = true;
  regexp?: RegExp;
  minLength?: number;
  maxLength?: number;
  $gt?: number | Date;
  $lt?: number | Date;
  $ngt?: number | Date;
  $nlt?: number | Date;
}
