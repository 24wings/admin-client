export class QueryCondition {
  public field: string;
  public compare: '='|'>'|'<'|'<='|'>='|'like';
   public value: any;
    public andOr: 'and' | 'or';
}
