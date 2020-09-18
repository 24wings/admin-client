

```typescript

@QueryToolbar({ loadUrl: 'assets/data/load-users.json' })
export class TableQueryToolbarEntity {
  @Field('姓名', { required: true })
  name: string;
  @Field('年龄')
  age: number;
}

@Editor({ loadUrl: 'assets/data/load-user-detail.json', submitUrl: 'asset/data/update-use.json' })
@DataGrid({ title: '基础查询表格', queryEntity: TableQueryToolbarEntity, editorEntity: TableQuerybar })
export class TableQuerybar {
  @Field('id', { readonly: true, isPrimaryKey: true })
  @Column('id')
  id: number;

  @Field('姓名')
  @Column('姓名')
  name: string;

  @Field('生日')
  @Column('生日', { format: 'yyyy-MM-dd ' })
  birthDate: Date;
  @Column('是否成年')
  over18: boolean;
  @Field('年龄')
  @Column('年龄')
  age: number;
}

```