export class Transform {
  write?: (val: any) => any;
  read?: (val) => any;
  formatter?: (val) => any;
  parser?: (val) => any;
}
