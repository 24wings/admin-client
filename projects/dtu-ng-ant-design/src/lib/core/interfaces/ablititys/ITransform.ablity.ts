interface ITransformAblity<T> {
  read?: (data: T) => any;
  write?: (data: T) => any;
}
