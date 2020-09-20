# 数据表格DataGrid
`数据表格包含两种专用装饰器`

- [ ] @DataGrid(title:string, dataGridConfig:DataGridConfig) 用于类

- [ ] @Column(column:BasicColumn) 用于列

常用的表格属性(DataGridConfig)
* title 页面标题
* pageSize:number,分页数量, 默认10
* selection:boolean 是否有勾选框

常用的列属性有
*  label:string
*  fotmat 日期
*  isPrimaryKey  用于删除

可以配合下使用
* @Editor 编辑器
* @QueryToolbar 工具条
* @DataManager 数据源