import { Column } from 'src/app/meta-ui/decorators/columns/column';
import { DataGrid } from 'src/app/meta-ui/decorators/widgets/data-grid';

@DataGrid({ title: '用户中心' })
export class BasicUser {
  @Column('id')
  id: number;
  @Column('姓名')
  name: string;
  @Column('生日', { format: 'yyyy-MM-dd HH:mm:ss' })
  birthDate: Date;
  @Column('是否已成年')
  over18: boolean;
  @Column('年龄')
  age: number;
}
