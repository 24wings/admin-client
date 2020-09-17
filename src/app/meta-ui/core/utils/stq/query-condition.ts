export class QueryCondition {
  constructor(public field: string, public compare: string, public value: any, public andOr: 'and' | 'or') {}
}
